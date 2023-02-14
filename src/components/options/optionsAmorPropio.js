import React from "react";

import "./options.css";

const OptionsAmorPropio = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Autoestima",handler: props.actionProvider.handleOptionsAutoestima,id: 1 },
    { text: "Ética y valores", handler: props.actionProvider.handleOptionsEticaValores, id: 2 },
    { text: "Emociones", handler: props.actionProvider.handleOptionsEmociones, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsAmorPropio;