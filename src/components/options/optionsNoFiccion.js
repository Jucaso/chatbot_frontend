import React from "react";

import "./options.css";

const OptionsNoFiccion = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Filosofía",handler: props.actionProvider.handleOptionsFilosofia,id: 1 },
    { text: "Poesía", handler: props.actionProvider.handleOptionsPoesia, id: 2 },
    { text: "Arte y literatura", handler: props.actionProvider.handleOptionsArteLiteratura, id: 3 },
    { text: "Educación", handler: props.actionProvider.handleOptionsEducacion, id: 4 },
    { text: "Amor propio", handler: props.actionProvider.handleOptionsAmorPropio, id: 5 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsNoFiccion;