import React from "react";

import "./options.css";

const OptionsPolitica = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Corrupcion",handler: props.actionProvider.handleOptionsCorrupcion,id: 1 },
    { text: "Desarrollo", handler: props.actionProvider.handleOptionsDesarrollo, id: 2 },
    { text: "Democracia", handler: props.actionProvider.handleOptionsDemocracia, id: 3 },
    { text: "Cultura", handler: props.actionProvider.handleOptionsCultura, id: 4 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsPolitica;