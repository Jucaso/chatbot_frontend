import React from "react";

import "./options.css";

const OptionsArquitectura = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Avances", handler: props.actionProvider.handleOptionsAvances, id: 1 },
    { text: "Diseño", handler: props.actionProvider.handleOptionsDiseño, id: 2 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsArquitectura;