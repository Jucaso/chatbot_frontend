//import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';
import config from './chatbot/config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} 
        actionProvider={ActionProvider} 	    
        messageParser={MessageParser}
        headerText='Chatea con Pepe'
        placeholderText='Escribe un mensaje'
   />
      </header>
    </div>
  );
}

export default App;
