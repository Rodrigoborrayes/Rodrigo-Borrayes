
import React from "react";
import "../../styles/atomos.css";
import "../../styles/pages.css"; 
import Button from "../atomos/Button";
import Usuario from "../organismo/Usuario";
import img from "../assets/img/Logo.png"

export default function MenuUsuario() {
  const bProps = [{}];
  const bProps2 = [{}];
  return (
    <>
      <div className="bigContainer">
        <a href="/">
        <button  className='edicion'>Cerrar Sesion </button>  
        </a>
      <img src={img} className="Menu"/>  
        <div className="containerLanding">
          <header className="headerLanding">
            <div className="rentlarTitle">
              <h1>RentLaR!</h1>
            </div>
            <div className="tituloLandingContainer"> {/* Contenedor para centrar */}
              <h1 className="tituloLanding">¡Bienvenido Arrendador!</h1>
              <div className="buttonContainer">
                <Button bProps={bProps} />
              </div>
            </div>
          </header>
          <section>
            <Usuario/>
          </section>
        </div>
      </div>
    </>
  );
}
