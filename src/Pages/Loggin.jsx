import React, { useState } from "react";
import "../../styles/atomos.css";
import Button from "../atomos/Button";
import Label from "../Moleculas/Label";
import "../../styles/pages.css";
import axios from "axios"
export default function Logging() {
  const [numCuarto, setNumCuarto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const bProps = [
    {
      nombre: "Iniciar",
      style: "Button",
    },
  ];

  const handleUsernameChange = (event) => {
    setNumCuarto(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await axios.post("http://localhost:8080/api/v1/auth/signin",{numCuarto,password},{withCredentials:true})
      const usuarioToken = data.data.token  
      console.log(usuarioToken)
        if (usuarioToken && numCuarto=="255") {
          window.location.href = "/landing";  // Redirigir a la vista de "landing" si es el usuario 255 y la contraseña es correcta
        } else if(usuarioToken) {
         window.location.href = "/menu-usuario"; // Redirigir a la vista de "menu-usuario" para otros usuarios
        }else{
          alert("No esta agregado en la base de datos")
        }
    } catch (error) {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="bigContainer">
        <div className="containerLogging">
          <div className="headerLogging">
            <Label title="Bienvenidos a" text="RentLaR" />
          </div>
          <form className="formContainerLogging" onSubmit={handleSubmit}>
            <div className="formHeader">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6676/6676023.png"
                alt="avatar"
                className="avatar"
              />
              <h1 className="formTitle">Iniciar Sesión</h1>
            </div>
            <div className="inputContainer">
              <label htmlFor="login-email" className="inputTitle">Usuario</label>
              <div className="input-wrapper">
                <input
                  className="input input-text"
                  type="text"
                  id="login-email"
                  autoComplete="off"
                  placeholder=" "
                  value={numCuarto}
                  onChange={handleUsernameChange}
                  required
                />
              </div>
            </div>
            <div className="inputContainer">
              <label htmlFor="login-password" className="inputTitle">Contraseña</label>
              <div className="input-wrapper">
                <input
                  className="input input-text"
                  type="password"
                  id="login-password"
                  autoComplete="off"
                  placeholder=" "
                  value={password}
                  onChange={handlePasswordChange}
                  required=""
                />
              </div>
            </div>
            <div className="error">{error}</div>
            <div className="buttonContainer">
              <button className="button-link" type="submit">
                <Button bProps={bProps} />
              </button>   
            </div>
          </form>
        </div>
      </div>
    </>
  );
}