import React from "react";

import "./options.css";

const OptionsJusticiaDerecho = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Familia",handler: props.actionProvider.handleOptionsFamilia,id: 1 },
    { text: "Comunicación", handler: props.actionProvider.handleOptionsComunicacion, id: 2 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsJusticiaDerecho;