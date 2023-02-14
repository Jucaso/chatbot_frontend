import React from "react";

import "./options.css";

const OptionsLigero = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Romance",handler: props.actionProvider.handleOptionsRomance,id: 1 },
    { text: "Cocina", handler: props.actionProvider.handleOptionsCocina, id: 2 },
    { text: "Humor y entretenimiento", handler: props.actionProvider.handleOptionsHumorEntretenimiento, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsLigero;