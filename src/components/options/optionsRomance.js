import React from "react";

import "./options.css";

const OptionsRomance = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Juvenil",handler: props.actionProvider.handleOptionsJuvenil,id: 1 },
    { text: "Narrativo", handler: props.actionProvider.handleOptionsNarrativo, id: 2 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsRomance;