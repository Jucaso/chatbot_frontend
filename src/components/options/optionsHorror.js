import React from "react";

import "./options.css";

const OptionsHorror = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Dramático", handler: props.actionProvider.handleOptionsDramatico, id: 1 },
    { text: "Distopía", handler: props.actionProvider.handleOptionsDistpia, id: 2 },
    { text: "Paranormal", handler: props.actionProvider.handleOptionsParanormal, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsHorror;