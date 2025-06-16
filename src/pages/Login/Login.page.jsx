import { useState } from 'react'
import { useNavigate } from "react-router";

const Login = () => {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  
  const handleRegisterButtonClick = () => {     
     navigate("/dashboard")
    };
      

  return (    
<div>
    <h1>Acceso</h1>

    <input value={user}
    onChange={(event) => setUser(event.target.value)}
    placeholder='Ingrese nombre de usuario'
    />

    <br />
    
    <input type="Contraseña" placeholder='Ingrese Contraseña' value={password}
        onChange={(event) => setPassword(event.target.value)}/>
    <br />

    <button
    disabled={!user.trim() || !password.trim()}
    //el metodo "trim" no permite espacios
    onClick={handleRegisterButtonClick}
    >Log in
    </button>
    <br />
    {errorMsg}
    </div>
  )
}

export default Login

