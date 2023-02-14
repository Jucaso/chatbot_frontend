import React from "react";

import "./options.css";

const OptionsInformacional = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Deporte",handler: props.actionProvider.handleOptionsDeporte,id: 1 },
    { text: "Justicia y derecho", handler: props.actionProvider.handleOptionsJusticiaDerecho, id: 2 },
    { text: "Medicina y salud", handler: props.actionProvider.handleOptionsMedicinaySalud, id: 3 },
    { text: "Arquitectura", handler: props.actionProvider.handleOptionsArquitectura, id: 4 },
    { text: "Política", handler: props.actionProvider.handleOptionsPolitica, id: 5 },
    { text: "Ciencia e investigación", handler: props.actionProvider.handleOptionsCienciaInvestigacion, id: 6 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsInformacional;