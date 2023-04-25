import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import FormularioTareas from "./componentes/formularioTareas";
import ListaTareas from "./componentes/listaTareas";

const App = () => {
  const [tareas, cambiarTareas] = useState([
    {
      id: 1,
      texto: "lavar la ropa",
      completada: false,
    },
    {
      id: 2,
      texto: "comprar comida",
      completada: false,
    },
  ]);
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);
  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
