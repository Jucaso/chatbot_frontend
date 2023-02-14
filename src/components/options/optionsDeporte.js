import React from "react";

import "./options.css";

const OptionsDeporte = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Psicología",handler: props.actionProvider.handleOptionsPsicologia,id: 1 },
    { text: "Ética", handler: props.actionProvider.handleOptionsEtica, id: 2 },
    { text: "Entrenamiento", handler: props.actionProvider.handleOptionsEntrenamiento, id: 3 },
    { text: "Educación física", handler: props.actionProvider.handleOptionsEducacionFisica, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsDeporte;