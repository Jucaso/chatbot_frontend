import React from "react";

import "./options.css";

const OptionsAventura = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Fantasía", handler: props.actionProvider.handleOptionsFantasia, id: 1 },
    { text: "Épico", handler: props.actionProvider.handleOptionsEpico, id: 2 },
    { text: "Cómics", handler: props.actionProvider.handleOptionsComics, id: 3 },
    { text: "Policiaca", handler: props.actionProvider.handleOptionsPoliciaca, id: 4 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsAventura;