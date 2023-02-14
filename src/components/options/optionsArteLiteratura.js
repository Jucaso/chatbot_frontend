import React from "react";

import "./options.css";

const OptionsArteLiteratura = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Contemporáneo",handler: props.actionProvider.handleOptionsContemporaneo,id: 1 },
    { text: "Humanidades", handler: props.actionProvider.handleOptionsHumanidades, id: 2 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsArteLiteratura;