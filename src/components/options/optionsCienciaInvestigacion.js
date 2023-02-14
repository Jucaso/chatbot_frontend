import React from "react";

import "./options.css";

const optionsCienciaInvestigacion = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Innovacion",handler: props.actionProvider.handleOptionsInnovacion,id: 1 },
    { text: "Ingenieria", handler: props.actionProvider.handleOptionsIngenieria, id: 2 },
    { text: "Ciencias naturales", handler: props.actionProvider.handleOptionsCienciasNaturales, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default optionsCienciaInvestigacion;