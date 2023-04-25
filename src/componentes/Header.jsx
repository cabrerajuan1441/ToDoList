import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toggleCompletadas = () => {
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };
  return (
    <header className="header">
      <h1 className="header__titulo">Lista De Tareas</h1>
      {mostrarCompletadas ? (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          No Mostrar Completadas
          <FontAwesomeIcon icon={faEyeSlash} className="header__icono" />
        </button>
      ) : (
        <button className="header__boton" onClick={() => toggleCompletadas()}>
          Mostrar Completadas
          <FontAwesomeIcon icon={faEye} className="header__icono" />
        </button>
      )}
    </header>
  );
};

export default Header;
