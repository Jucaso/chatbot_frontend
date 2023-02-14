import React from "react";

import "./options.css";

const OptionsMedicinaySalud = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Nutrición",handler: props.actionProvider.handleOptionsNutricion,id: 1 },
    { text: "Econonomía de la salud", handler: props.actionProvider.handleOptionsEconomiaSalud, id: 2 },
    { text: "Salud mental", handler: props.actionProvider.handleOptionsSaludMental, id: 3 },
    { text: "Prevención", handler: props.actionProvider.handleOptionsPrevencion, id: 4 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsMedicinaySalud;