import React from "react";

import "./options.css";

const OptionsFilosofia = (props) => {
    //console.log("props:",props)
  const options = [
    { text: "Sátira",handler: props.actionProvider.handleOptionsSátira,id: 1 },
    { text: "Sentimental", handler: props.actionProvider.handleOptionsSentimental, id: 2 },
    { text: "Prosa", handler: props.actionProvider.handleOptionsProsa, id: 3 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default OptionsFilosofia;