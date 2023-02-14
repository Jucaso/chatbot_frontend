import React from "react";

import "./options.css";

const OptionsMisterio = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Mitología", handler: props.actionProvider.handleOptionsMitologia, id: 1 },
    { text: "Historia", handler: props.actionProvider.handleOptionsHistoria, id: 2 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsMisterio;