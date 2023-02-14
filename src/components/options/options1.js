import React from "react";

import "./options.css";

const Options1 = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Ficción", handler: props.actionProvider.handleOptionsFiccion, id: 1 },
    { text: "Informacional", handler: props.actionProvider.handleOptionsInformacional, id: 2 },
    { text: "No ficción", handler: props.actionProvider.handleOptionsNoFiccion, id: 3 },
    { text: "Ligero", handler: props.actionProvider.handleOptionsLigero, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options1;