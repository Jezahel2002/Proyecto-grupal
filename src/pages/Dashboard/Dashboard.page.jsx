import { useEffect, useState } from "react";
import "../Dashboard/Dashboard.page.css";


const Dashboard = () => {
  const [gasto, setGasto] = useState(0);
  const [tipo, setTipo] = useState("Supermercado"); // default
  const [gastos, setGastos] = useState([]);
  const [totalGastos, setTotalGastos] = useState(0);

  // Cargar los gastos desde localStorage al inicio
  useEffect(() => {
    const data = localStorage.getItem("gastos");
    if (data) {
      setGastos(JSON.parse(data));
    }
  }, []);

  const handleRegisterButtonClick = () => {
    if (gasto <= 0 || !tipo) {
      alert("Por favor, ingresa un gasto válido y selecciona un tipo.");
      return;
    }

    const gastoToSave = {
      gasto,
      tipo,
      fecha: new Date().toLocaleString() // formato legible
    };

    const nuevosGastos = [...gastos, gastoToSave];
    setGastos(nuevosGastos);
    localStorage.setItem('gastos', JSON.stringify(nuevosGastos));

    const totalGastos = nuevosGastos.reduce((gasto, valor) => gasto + valor, 0);
    setTotalGastos(totalGastos);
  };

  return (
    <>
      <div className="vic">

        <div className="mainContainer">
          <span><img src="https://cdn.iconscout.com/icon/free/png-256/free-pirata-1479929-1253052.png?f=webp"
            alt="img"></img><h1>MoneyControl</h1></span>

          <input
            value={gasto}
            onChange={(e) => setGasto(Number(e.target.value))}
            placeholder="Ingrese cantidad"
            type="number"
            min="1"
            id="quantity"
          />

          <select
            id="miSelect"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="Supermercado">Supermercado</option>
            <option value="Automovil">Automovil</option>
            <option value="Ocio">Ocio</option>
            <option value="Seguros">Seguros</option>
            <option value="Gastos de la comunidad">Gastos de la comunidad</option>
          </select>

          <button onClick={handleRegisterButtonClick}>Registrar</button>
          <p className="total">Total gastos: {totalGastos}€</p>
        </div>


        <div className="list">
          <ul>
            {gastos.map((g, index) => (
              <li className="payList" key={index}>
                {g.tipo} - {g.gasto}€<br />
                {g.fecha}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export { Dashboard };