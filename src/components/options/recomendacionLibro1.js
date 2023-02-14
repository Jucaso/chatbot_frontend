import React from "react";

import "./options.css";

const RecomendacionLibro1 = (props) => {
    //console.log("Libros",props.actionProvider.state.bookNames)
    console.log(props)
//   const options = [
//     { text: "Psicología",handler: props.actionProvider.handleOptionsPsicologia,id: 1 },
//     { text: "Ética", handler: props.actionProvider.handleOptionsEtica, id: 2 },
//     { text: "Entrenamiento", handler: props.actionProvider.handleOptionsEntrenamiento, id: 3 },
//     { text: "Educación física", handler: props.actionProvider.handleOptionsEducacionFisica, id: 4 },
//   ];

  const buttonsMarkup = 
    <div className="options-container">
      <button key={1} onClick={props.actionProvider.handleLinkOPACLibro1} className="option-button">
      {"Encuéntralo aquí"}
      </button>
      <button key={2} onClick={props.actionProvider.handleRecomendacionLibro1} className="option-button">
      {"Recomiendame más de esto"}
      </button>
    </div>    
    


  return buttonsMarkup;
};

export default RecomendacionLibro1;