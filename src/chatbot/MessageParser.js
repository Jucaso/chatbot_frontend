//import React from 'react';
function quitarAcentos(cadena){
	const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
	return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }
  parse(message){
    if (quitarAcentos(message).toLowerCase().includes('recomiendame')) {
      this.actionProvider.handleRecChat(quitarAcentos(message).toLowerCase());
    }
    else if (quitarAcentos(message).toLowerCase().includes('reiniciar')) {
      this.actionProvider.handleReiniciar(quitarAcentos(message).toLowerCase());
    } 
    
  };

  // return (
  //   <div>
  //     {React.Children.map(children, (child) => {
  //       return React.cloneElement(child, {
  //         parse: parse,
  //         actions: {},
  //       });
  //     })}
  //   </div>
  // );
};

export default MessageParser;