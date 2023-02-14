import React from "react";

import "./options.css";

const OptionsInnovacion = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Tecnología",handler: props.actionProvider.handleOptionsTecnologia,id: 1 },
    { text: "Operativa", handler: props.actionProvider.handleOptionsOperativa, id: 2 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsInnovacion;