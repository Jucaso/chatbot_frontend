import React from "react";

import "./options.css";

const OptionsFilosofia = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Idelología",handler: props.actionProvider.handleOptionsIdeologia,id: 1 },
    { text: "Epistemología", handler: props.actionProvider.handleOptionsEpistemologia, id: 2 },
    { text: "Existencia", handler: props.actionProvider.handleOptionsArteExistencia, id: 3 },
    { text: "Vida", handler: props.actionProvider.handleOptionsVida, id: 4 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsFilosofia;