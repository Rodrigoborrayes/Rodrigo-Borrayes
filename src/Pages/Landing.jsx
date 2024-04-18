import React from "react";
import "../../styles/atomos.css";
import "../../styles/pages.css"; 
import Button from "../atomos/Button";
import Contenido from "../organismo/Contenido";
import img from "../assets/img/Logo.png"


export default function Landing() {
  const bProps = [{}];
  const bProps2 = [{}];
  return (
    <>

    <a href="/">
    <button  className='edicion'>Cerrar Sesion </button>
    </a>
   
  
              <img src={img} className="Landing"/>
      <div className="bigContainer">
        <div className="containerLanding">
          <header className="headerLanding">
            <div className="rentlarTitle">
              <h1>RentLaR!</h1>
            </div>
            <div className="landingTitleContainer"> 
              <h1 className="landingTitle">¡Bienvenido Emprendedor!</h1>
              <div className="buttonContainer">
                <Button bProps={bProps} />
              </div>
            </div>
          </header>
          <section>
            <Contenido />
          </section>
        </div>
      </div>
    </>
  );
}

