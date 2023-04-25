import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

// se crea la constante, donde se le asigna un estado al input
const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState("");

  // se crea la funcion para poder cambiar el estado mediante el input
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarTareas([
      ...tareas,
      {
        // se utiliza uuid para asignar un id unico a los objetos
        id: uuidv4(),
        texto: inputTarea,
        completada: false,
      },
    ]);

    cambiarInputTarea("");
  };
  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
        required
      ></input>
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};

export default FormularioTareas;
