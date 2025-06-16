import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
import "../Dashboard/Dashboard.page.css";

const Dashboard = () => {
  const [gasto, setGasto] = useState(0);
  const [tipo, setTipo] = useState("");

  const handleRegisterButtonClick = () => {
    console.log(gasto, tipo, new Date())

    const gastoToSave = {
      gasto: gasto,
      tipo: tipo,
      fecha: new Date()
    }

    // obtener los gastos de localstorage 
    const arrayRecuperadoJSON = localStorage.getItem('gastos');
    if (!arrayRecuperadoJSON) {
      localStorage.setItem('gastos', JSON.stringify([gastoToSave]))
    } else {

      const arrayGastos = JSON.parse(arrayRecuperadoJSON)
      console.log(arrayGastos)
      // añadirle el gasto nuevo
      arrayGastos.push(gastoToSave)

      // volver a guardar el array de gastos
      localStorage.setItem('gastos', JSON.stringify(arrayGastos))
    }
  }

  return (
    <>

      {/* <div className="header">
        <span><img src="https://cdn.iconscout.com/icon/free/png-256/free-pirata-1479929-1253052.png?f=webp"
          alt="img"></img><h1>MoneyControl</h1></span>
      </div>
      <br /> */}

      <div className="mainContainer">
        <input value={gasto}
          onChange={(event) => setGasto(event.target.value)}
          placeholder="Ingrese cantidad"

          type="number"
          min="1"
          id="quantity"
        />

        <select id="miSelect" onChange={(event) => setTipo(event.target.value)}>
          <option value="Supermercado">Supermercado</option>
          <option value="Automovil">Automovil</option>
          <option value="Ocio">Ocio</option>
          <option value="Seguros">Seguros</option>
          <option value="Gastos de la comunidad">Gastos de la comunidad</option>
        </select>

        {arrayGastos.map((gastoToSave, index) => (
          <li key={index}>
            {gastoToSave.tipo}-{gastoToSave.gasto}€<br />
            {gastoToSave.fecha}
          </li>
        ))}

        <button onClick={handleRegisterButtonClick}>Registrar</button>
      </div>
    </>
  );
};

export { Dashboard };