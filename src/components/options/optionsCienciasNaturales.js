import React from "react";

import "./options.css";

const OptionsCienciasNaturales = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Medio ambiente",handler: props.actionProvider.handleOptionsMedioAmbiente,id: 1 },
    { text: "Biología", handler: props.actionProvider.handleOptionsBiologia, id: 2 },
    { text: "Especie humana", handler: props.actionProvider.handleOptionsEspecieHumana, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsCienciasNaturales;