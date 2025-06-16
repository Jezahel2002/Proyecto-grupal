import { useState } from 'react'
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPass, setRepeatPassword] = useState("");

    const isButtonEnabled = 
    user &&
    password &&
    repeatPass &&
    password == repeatPass

    const handleRegisterButtonClick = () => {
    fetch("http://localhost:8080/register", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username: user, password: password }),
    })
      .then((res) => {
        if (res.ok) {
          console.log("Usuario registrado");
          navigate("/login");
        } else {
            console.error("error found", res.body)
        }
      })
      .catch((err) => console.error(err));
  };

  return (
<div>
    <h1>Register</h1>
    <input value={user}
    onChange={(event) => setUser(event.target.value)}
    placeholder='Ingrese nombre de usuario'
    />

    <br />
    
    <input type="password" placeholder='Ingrese Contraseña' value={password}
        onChange={(event) => setPassword(event.target.value)}/>
    <br />

    <input type="password"
    placeholder='Repita la Contraseña'
    value={repeatPass}
    onChange={(event) => setRepeatPassword(event.target.value)}/>
    <br />

    <button disabled={!isButtonEnabled}
    onClick={handleRegisterButtonClick}>
        Registrarse</button>
    </div>
)
}

export default Register