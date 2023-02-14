import React from "react";

import "./options.css";

const OptionsEducacion = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Infancia",handler: props.actionProvider.handleOptionsInfancia,id: 1 },
    { text: "Proceso de aprendizaje", handler: props.actionProvider.handleOptionsProcesoAprendizaje, id: 2 },
    { text: "Competencia", handler: props.actionProvider.handleOptionsCompetencia, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsEducacion;