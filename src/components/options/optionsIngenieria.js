import React from "react";

import "./options.css";

const optionsIngenieria = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Automatización",handler: props.actionProvider.handleOptionsAutomatizacion,id: 1 },
    { text: "Control de calidad", handler: props.actionProvider.handleOptionsControlCalidad, id: 2 },
    { text: "Nanotecnología", handler: props.actionProvider.handleOptionsNanotecnologia, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default optionsIngenieria;