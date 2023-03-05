//import React from 'react';

// Función que elimina los elementos de un array sin dañar el state
function limpiarArray(array){
    const aux = array.length;
    for (let index = 0; index < aux; index++) {
        array.pop();
    }   
}

// function modificaAux(){
    
//     var texto = document.querySelectorAll('.react-chatbot-kit-chat-bot-message');
//     //texto.reload();
//     for (let item of texto) {
//         item.innerHTML = unEscape(item.innerHTML)
//         console.log("item.innerHTML:", item.innerHTML)
//     }
    
//     console.log("Texto tamaño:", texto.innerHTML);
//     console.log("Texto:", texto);
// }

// function unEscape(htmlStr) {
//     htmlStr = htmlStr.replace(/&lt;/g , "<");	 
//     htmlStr = htmlStr.replace(/&gt;/g , ">");     
//     // htmlStr = htmlStr.replace(/&quot;/g , "\"");  
//     // htmlStr = htmlStr.replace(/&#39;/g , "\'");   
//     // htmlStr = htmlStr.replace(/&amp;/g , "&");
//     return htmlStr;
// }

function redirigeLink(link){
    window.open(link);
}
// Recomendación dado el input personalizado del usuario
async function handleRecommendation(input, botMsg, setState, state){
    limpiarArray(state.bookNames);
    limpiarArray(state.history)
    try {
        await fetch('https://pepechat.azurewebsites.net/getRec',{
            'method' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({input: input})
        }).then(response => response.json())
        .then((rec) => {
            
            //console.log(rec);
            state.bookNames.push([rec[0]['rec1'], rec[0]['url']]);
            state.bookNames.push([rec[1]['rec2'], rec[1]['url']]);
            state.bookNames.push([rec[2]['rec3'], rec[2]['url']]);
            state.bookNames.push([rec[3]['rec4'], rec[3]['url']]);
            state.bookNames.push([rec[4]['rec5'], rec[4]['url']]);

            //var link = document.getElementsByClassName('react-chatbot-kit-chat-bot-message')
            //console.log("link:", link[link.length - 1])

            const botMessage = botMsg("Aquí tienes tus recomendaciones personalizadas:") 
            const botMessage1 = botMsg(rec[0]['rec1'], 
            {widget : "recomendacionLibro1"});
            const botMessage2 = botMsg(rec[1]['rec2'], 
            {widget : "recomendacionLibro2"});
            const botMessage3 = botMsg(rec[2]['rec3'], 
            {widget : "recomendacionLibro3"});
            const botMessage4 = botMsg(rec[3]['rec4'], 
            {widget : "recomendacionLibro4"});
            const botMessage5 = botMsg(rec[4]['rec5'], 
            {widget : "recomendacionLibro5"});
            
            // const botMessage = botMsg("Aquí tienes tus recomendaciones personalizadas:") 
            // const botMessage1 = botMsg(rec[0]['rec1'], 'custom', 
            // {widget : "recomendacionLibro1"});
            // const botMessage2 = botMsg(rec[1]['rec2'] + " - Link OPAC: " + rec[1]['url'], 
            // {widget : "recomendacionLibro2"});
            // const botMessage3 = botMsg(rec[2]['rec3'] + " - Link OPAC: " + rec[2]['url'], 
            // {widget : "recomendacionLibro3"});
            // const botMessage4 = botMsg(rec[3]['rec4'] + " - Link OPAC: " + rec[3]['url'], 
            // {widget : "recomendacionLibro4"});
            // const botMessage5 = botMsg(rec[4]['rec5'] + " - Link OPAC: " + rec[4]['url'], 
            // {widget : "recomendacionLibro5"});
            // console.log("botMessage1:",botMessage1);
            // botMessage1.message = remover(botMessage1.message);
            // console.log("botMessage1 after removing:",botMessage1);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessage1, botMessage2, botMessage3, botMessage4, botMessage5],
            }));
            

            //var link = document.getElementsByClassName('react-chatbot-kit-chat-bot-message')
            //console.log("link:", link)
            //console.log("link len:", link.length)
        })
    } catch (error) {
        console.log(error);          
    }
    // var texto = document.getElementsByClassName('react-chatbot-kit-chat-bot-message');
    // for (let item of texto) {
    //     item.innerHTML = unEscape(item.innerHTML)
    //     console.log("item.innerHTML:", item.innerHTML)
    // }
    //modificaAux();
    //texto.forEach(element => element.innerHTML = unEscape(element.innerHTML));
    //console.log("Texto tamaño:", texto.innerHTML);
    //console.log("Texto:", texto);
}

// Recomendación dado el título de un libro
async function handleRecommendationV2(input, botMsg, setState, state){
    limpiarArray(state.bookNames);
    try {
        await fetch('https://pepechat.azurewebsites.net/getRecV2',{
            'method' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({input: input})
        }).then(response => response.json())
        .then((rec) => {
            //console.log(rec);
            state.bookNames.push([rec[0]['rec1'], rec[0]['url']]);
            state.bookNames.push([rec[1]['rec2'], rec[1]['url']]);
            state.bookNames.push([rec[2]['rec3'], rec[2]['url']]);
            state.bookNames.push([rec[3]['rec4'], rec[3]['url']]);
            state.bookNames.push([rec[4]['rec5'], rec[4]['url']]);

            //var link = document.getElementsByClassName('react-chatbot-kit-chat-bot-message')
            //console.log("link:", link[link.length - 1])

            const botMessage = botMsg("Aquí tienes tus recomendaciones personalizadas:") 
            const botMessage1 = botMsg(rec[0]['rec1'], 
            {widget : "recomendacionLibro1"});
            const botMessage2 = botMsg(rec[1]['rec2'], 
            {widget : "recomendacionLibro2"});
            const botMessage3 = botMsg(rec[2]['rec3'], 
            {widget : "recomendacionLibro3"});
            const botMessage4 = botMsg(rec[3]['rec4'], 
            {widget : "recomendacionLibro4"});
            const botMessage5 = botMsg(rec[4]['rec5'], 
            {widget : "recomendacionLibro5"});

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessage1, botMessage2, botMessage3, botMessage4, botMessage5],
            }));
        })
    } catch (error) {
        console.log(error);          
    }
    //modificaAux();
}

// Recomendación dado el input personalizado del usuario en el chat
async function handleRecommendationV3(input, botMsg, setState, state){
    limpiarArray(state.bookNames);
    limpiarArray(state.history)
    try {
        await fetch('https://pepechat.azurewebsites.net/getRecV3',{
            'method' : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({input: input})
        }).then(response => response.json())
        .then((rec) => {
            
            //console.log(rec);
            state.bookNames.push([rec[0]['rec1'], rec[0]['url']]);
            state.bookNames.push([rec[1]['rec2'], rec[1]['url']]);
            state.bookNames.push([rec[2]['rec3'], rec[2]['url']]);
            state.bookNames.push([rec[3]['rec4'], rec[3]['url']]);
            state.bookNames.push([rec[4]['rec5'], rec[4]['url']]);

            //var link = document.getElementsByClassName('react-chatbot-kit-chat-bot-message')
            //console.log("link:", link[link.length - 1])

            const botMessage = botMsg("Aquí tienes tus recomendaciones personalizadas:") 
            const botMessage1 = botMsg(rec[0]['rec1'], 
            {widget : "recomendacionLibro1"});
            const botMessage2 = botMsg(rec[1]['rec2'], 
            {widget : "recomendacionLibro2"});
            const botMessage3 = botMsg(rec[2]['rec3'], 
            {widget : "recomendacionLibro3"});
            const botMessage4 = botMsg(rec[3]['rec4'], 
            {widget : "recomendacionLibro4"});
            const botMessage5 = botMsg(rec[4]['rec5'], 
            {widget : "recomendacionLibro5"});

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessage1, botMessage2, botMessage3, botMessage4, botMessage5],
            }));
        })
    } catch (error) {
        const botMessage = botMsg("Lo siento, no entendí tú petición. Intenta escribir de otra manera tu solicitud.")
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));            
    }
    //modificaAux();
}
// Definición del ActionProvider
var history = [], bookNames = [];

class ActionProvider {
    
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.state = {
            history, 
            bookNames
        };
        
    }
    
    handleRecomendacionLibro1 = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        var input = this.state.bookNames[0][0];
        console.log("Booknames:", this.state.bookNames[0]);
        //console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendationV2(input, this.createChatBotMessage, this.setState, this.state);

    };

    handleLinkOPACLibro1 = () => {    

        redirigeLink(this.state.bookNames[0][1]);
    };

    handleRecomendacionLibro2 = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        var input = this.state.bookNames[1][0];
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendationV2(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleLinkOPACLibro2 = () => {    

        redirigeLink(this.state.bookNames[1][1]);
    };

    handleRecomendacionLibro3 = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        var input = this.state.bookNames[2][0];
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendationV2(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleLinkOPACLibro3 = () => {    

        redirigeLink(this.state.bookNames[2][1]);
    };

    handleRecomendacionLibro4 = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        var input = this.state.bookNames[3][0];
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendationV2(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleLinkOPACLibro4 = () => {    

        redirigeLink(this.state.bookNames[3][1]);
    };

    handleRecomendacionLibro5 = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        var input = this.state.bookNames[4][0];
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendationV2(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleLinkOPACLibro5 = () => {    

        redirigeLink(this.state.bookNames[4][1]);
    };

    handleRecChat = (message) => {
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({      
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        var input = message;
        console.log("Input del usuario en el chatbot:", input);
        handleRecommendationV3(input, this.createChatBotMessage, this.setState, this.state);
      };
    
    handleOptionsFiccion = () => {
        const botMessage = this.createChatBotMessage('Genial, aquí te muestro algunas cosas de ficción:',
        {widget: "optionsFiccion"});

        this.state.history.push('ficcion');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        console.log(document.querySelectorAll('.react-chatbot-kit-chat-bot-message'))
        btn.forEach(elemento => elemento.remove());
        console.log(this.state.history);
    };

    handleOptionsAventura = () => {
        const botMessage = this.createChatBotMessage('¡Grandes aventuras hay en los libros!, dime qué te llama más la atención:',
        {widget: "optionsAventura"});

        this.state.history.push('aventura');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));  
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsFantasia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('fantasia');
        var input = "";
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
        //console.log("HTML collection después de la recomendación:", document.getElementsByClassName('react-chatbot-kit-chat-bot-message'));
    };

    handleOptionsEpico = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('epico');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsComics = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('comic');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsPoliciaca = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('policia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsHorror = () => {
        const botMessage = this.createChatBotMessage('Horror, curiosa elección, seguro te gustará algo de esto:',
        {widget: "optionsHorror"});

        this.state.history.push('horror');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));  
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsDramatico = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('drama');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsDistopia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('distopia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsParanormal = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...');
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('paranormal');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsMisterio = () => {
        const botMessage = this.createChatBotMessage('El señor actua de maneras misteriosas, por eso te ofrezco esto:',
        {widget: "optionsMisterio"});

        this.state.history.push('misterio');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsMitologia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...');
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('mitologia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsHistoria = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...');
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('historia')
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsInformacional = () => {
        const botMessage = this.createChatBotMessage('Buena elección, tengo buena información para ti, mira cual te gusta más:',
        {widget: "optionsInformacional"});

        //this.state.history.push('ficcion')

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsDeporte = () => {
        const botMessage = this.createChatBotMessage('Me encanta el deporte, fijate que tema te gusta más:',
        {widget: "optionsDeporte"});

        this.state.history.push('deporte');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsPsicologia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...');
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('psicologia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEtica = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('etica');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }

        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEntrenamiento = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('entrenamiento');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEducacionFisica = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('educacion');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsJusticiaDerecho = () => {
        const botMessage = this.createChatBotMessage('La justicia es fundamental en la vida, selecciona tu tema de interés:',
        {widget: "optionsJusticiaDerecho"});

        this.state.history.push('justicia');
        this.state.history.push('derecho');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsFamilia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('familia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsComunicacion = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('comunicacion');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsMedicinaySalud = () => {
        const botMessage = this.createChatBotMessage('Temas médicos y de salud, tengo algo de ello, échale un ojo:',
        {widget: "optionsMedicinaySalud"});

        this.state.history.push('medicina');
        this.state.history.push('salud');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsNutricion = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('nutricion');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEconomiaSalud = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('economia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsSaludMental = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('mental');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsPrevencion = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('prevencion');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsArquitectura = () => {
        const botMessage = this.createChatBotMessage('Temas médicos y de salud, tengo algo de ello, échale un ojo:',
        {widget: "optionsArquitectura"});

        this.state.history.push('arquitectura');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsAvances = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('avances');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsDiseño = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('diseño');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsPolitica = () => {
        const botMessage = this.createChatBotMessage('Tema controversial, aún así, siempre hay tópicos relacionados a la política:',
        {widget: "optionsPolitica"});

        this.state.history.push('politica');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsCorrupcion = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('corrupcion');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsDesarrollo = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('desarrollo');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsDemocracia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('democracia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsCultura = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('cultura');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsCienciaInvestigacion = () => {
        const botMessage = this.createChatBotMessage('La investigación en la ciencia es increible, mira lo que te más te llame:',
        {widget: "optionsCienciaInvestigacion"});
        
        this.state.history.push('ciencia');
        this.state.history.push('investigacion');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsInnovacion = () => {
        const botMessage = this.createChatBotMessage('La innovación es inevitable y excelente, te dejo lo más relevante que tengo:',
        {widget: "optionsInnovacion"});

        this.state.history.push('innovacion');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsTecnologia= () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('tecnologia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsOperativa = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('operativa');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsIngenieria = () => {
        const botMessage = this.createChatBotMessage('Lo mejor, me encanta la ingeniería, sin duda excelente decisión, mira lo que tengo:',
        {widget: "optionsIngenieria"});

        this.state.history.push('ingenieria');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsAutomatizacion = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('automatizacion');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsControlCalidad = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('calidad');
        this.state.history.push('control');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsNanotecnologia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('nanotecnologia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };


    handleOptionsCienciasNaturales = () => {
        const botMessage = this.createChatBotMessage('Que tema tan increible, dejame enseñarte algunas cosas:',
        {widget: "optionsCienciasNaturales"});

        this.state.history.push('natural');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsMedioAmbiente = () => {
        const botMessage = this.createChatBotMessage('De vital importancia el medio ambiente es, sugerencias tengo aquí:',
        {widget: "optionsMedioAmbiente"});

        this.state.history.push('ambiente');
        this.state.history.push('medio');
        console.log(this.state.history);

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
    };

    handleOptionsVegetacion = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('vegetacion');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsFauna = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('fauna');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsBiologia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('fauna');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEspecieHumana = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('especie');
        this.state.history.push('humana');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };


    handleOptionsNoFiccion = () => {
        const botMessage = this.createChatBotMessage('¡La no ficción involucra grandes temas! Echale un ojo:',
        {widget: "optionsNoFiccion"});

        //this.state.history.push('ficcion')

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsFilosofia = () => {
        const botMessage = this.createChatBotMessage('Dejame filosofar... Mientras te dejo algunos temas interesantes::',
        {widget: "optionsFilosofia"});

        this.state.history.push('fisolofia');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsIdeologia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('ideologia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEpistemologia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('epistemologia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsArteExistencia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('existencia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsVida = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('vida');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsPoesia = () => {
        const botMessage = this.createChatBotMessage('La poesía para grandes personas va dirigida, ¿Qué te parecen estos temas?:',
        {widget: "optionsPoesia"});

        this.state.history.push('poesia');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsSatira = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('satira');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsSentimental = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('sentimental');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsProsa = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('prosa');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsArteLiteratura = () => {
        const botMessage = this.createChatBotMessage('Me emociono con el arte y la literatura, mira qué tengo:',
        {widget: "optionsArteLiteratura"});

        this.state.history.push('arte');
        this.state.history.push('literatura');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsContemporaneo = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('contemporaneo');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsHumanidades = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('humanidades');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEducacion = () => {
        const botMessage = this.createChatBotMessage('¡La educación es el pilar de cualquier sociedad, por eso es de vital importancia, mira lo relacionado sobre esto:',
        {widget: "optionsEducacion"});

        this.state.history.push('educacion');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsInfancia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('infancia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsProcesoAprendizaje = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('infancia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsCompetencia = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('infancia');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsAmorPropio = () => {
        const botMessage = this.createChatBotMessage('Eres únic@ y especial, te quiero, por eso te muestro los mejores temas para que te des cuenta de esto:',
        {widget: "optionsAmorPropio"});

        this.state.history.push('amor');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsAutoestima = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('autoestima');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEticaValores = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('etica');
        this.state.history.push('valores');
        this.state.history.push('autoestima');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsEmociones = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('emociones');
        this.state.history.push('autoestima');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsLigero = () => {
        const botMessage = this.createChatBotMessage('Ligero, trae relajación y gusto, ¡te dejo lo más interesante para que elijas!',
        {widget: "optionsLigero"});

        //this.state.history.push('ficcion')

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsRomance = () => {
        const botMessage = this.createChatBotMessage('El romanticismo es genial, me encanta, mira lo que tengo:',
        {widget: "optionsRomance"});

        this.state.history.push('romance')

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        console.log(this.state);
    };

    handleOptionsJuvenil = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('juvenil');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsNarrativo = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('narrativo');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsCocina = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('cocina');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };

    handleOptionsHumorEntretenimiento = () => {    
        const botMessage = this.createChatBotMessage('Estoy pensando en los mejores libros para tí, dame un momento...')
        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],          
        }));       
        this.state.history.push('humor');
        this.state.history.push('entretenimiento');
        var input = ""
        for (let index = 0; index < this.state.history.length; index++) {
            if (index < this.state.history.length - 1){
                input = input + this.state.history[index] + " ";
            }
            else{
                input = input + this.state.history[index];
            }       
        }
        console.log("Input del usuario en el chatbot:", input);
        const btn = document.querySelectorAll('.option-button');
        btn.forEach(elemento => elemento.remove());
        handleRecommendation(input, this.createChatBotMessage, this.setState, this.state);
    };


//     return (
//         <div>
//         {React.Children.map(children, (child) => {
//             return React.cloneElement(child, {
//             actions: {
//                 handleHello,
//                 handleSelection
//             },
//             });
//         })}
//         </div>
//   );
};

export default ActionProvider;