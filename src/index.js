import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import {CookiesProvider} from 'react-cookie';
//import Chatbot from './components/chatbot'
// import Chatbot from 'react-chatbot-kit'
// import ActionProvider from './chatbot/ActionProvider';
// import MessageParser from './chatbot/MessageParser';
// import config from './chatbot/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
