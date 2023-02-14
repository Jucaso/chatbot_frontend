import React from "react";

import "./options.css";

const OptionsFiccion = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Aventura",handler: props.actionProvider.handleOptionsAventura,id: 1 },
    { text: "Horror", handler: props.actionProvider.handleOptionsHorror, id: 2 },
    { text: "Misterio", handler: props.actionProvider.handleOptionsMisterio, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsFiccion;