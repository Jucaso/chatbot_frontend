import React from "react";

import "./options.css";

const OptionsMedioAmbiente = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Vegetación",handler: props.actionProvider.handleOptionsVegetacion,id: 1 },
    { text: "Fauna", handler: props.actionProvider.handleOptionsFauna, id: 2 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsMedioAmbiente;