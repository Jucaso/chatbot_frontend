    import { createChatBotMessage } from "react-chatbot-kit";
import RecomendacionLibro1 from "../components/options/recomendacionLibro1";
import RecomendacionLibro2 from "../components/options/recomendacionLibro2";
import RecomendacionLibro3 from "../components/options/recomendacionLibro3";
import RecomendacionLibro4 from "../components/options/recomendacionLibro4";
import RecomendacionLibro5 from "../components/options/recomendacionLibro5";
import Options1 from "../components/options/options1";
import OptionsFiccion from "../components/options/optionsFiccion";
import OptionsAventura from "../components/options/optionsAventura";
import OptionsHorror from "../components/options/optionsHorror";
import OptionsMisterio from "../components/options/optionsMisterio";
import OptionsInformacional from "../components/options/optionsInformacional";
import OptionsDeporte from "../components/options/optionsDeporte";
import OptionsJusticiaDerecho from "../components/options/optionsJusticiaDerecho";
import OptionsMedicinaySalud from "../components/options/optionsMedicinaySalud";
import OptionsArquitectura from "../components/options/optionsArquitectura";
import OptionsPolitica from "../components/options/optionsPolitica";
import OptionsCienciaInvestigacion from "../components/options/optionsCienciaInvestigacion";
import OptionsInnovacion from "../components/options/optionsInnovacion";
import OptionsIngenieria from "../components/options/optionsIngenieria";
import OptionsCienciasNaturales from "../components/options/optionsCienciasNaturales";
import OptionsMedioAmbiente from "../components/options/optionsMedioAmbiente";
import OptionsNoFiccion from "../components/options/optionsNoFiccion";
import OptionsFilosofia from "../components/options/optionsFilosofia";
import OptionsPoesia from "../components/options/optionsPoesia";
import OptionsArteLiteratura from "../components/options/optionsArteLiteratura";
import OptionsEducacion from "../components/options/optionsEducacion";
import OptionsAmorPropio from "../components/options/optionsAmorPropio";
import OptionsLigero from "../components/options/optionsLigero";
import OptionsRomance from "../components/options/optionsRomance";


import CustomMessage from "../components/customMessage";



const config = {
    initialMessages: [createChatBotMessage('Hola, soy Pepe, tu asistente de lectura, te muestro algunas sugerencias de tópicos o géneros de lectura:',{
        widget: 'options1'
    }),],
    botName: "Pepe",
    // customStyles: {
    // botMessageBox: {
    // backgroundColor: '#376B7E', // Color de la caja de mensajes del bot
    // },
    // chatButton: {
    // backgroundColor: '#5ccc9d', // Color del botón enviar
    // },  
    // },
    widgets: [
        {
            widgetName: 'recomendacionLibro1',
            widgetFunc: (props) => <RecomendacionLibro1 {...props} />,
        },
        {
            widgetName: 'recomendacionLibro2',
            widgetFunc: (props) => <RecomendacionLibro2 {...props} />,
        },
        {
            widgetName: 'recomendacionLibro3',
            widgetFunc: (props) => <RecomendacionLibro3 {...props} />,
        },
        {
            widgetName: 'recomendacionLibro4',
            widgetFunc: (props) => <RecomendacionLibro4 {...props} />,
        },
        {
            widgetName: 'recomendacionLibro5',
            widgetFunc: (props) => <RecomendacionLibro5 {...props} />,
        },
        {
            widgetName: 'options1',
            widgetFunc: (props) => <Options1 {...props} />,
        },
        {
            widgetName: 'optionsFiccion',
            widgetFunc: (props) => <OptionsFiccion {...props} />,
        },
        {
            widgetName: 'optionsAventura',
            widgetFunc: (props) => <OptionsAventura {...props} />,
        },
        {
            widgetName: 'optionsHorror',
            widgetFunc: (props) => <OptionsHorror {...props} />,
        },
        {
            widgetName: 'optionsMisterio',
            widgetFunc: (props) => <OptionsMisterio {...props} />,
        },
        {
            widgetName: 'optionsInformacional',
            widgetFunc: (props) => <OptionsInformacional {...props} />,
        },
        {
            widgetName: 'optionsDeporte',
            widgetFunc: (props) => <OptionsDeporte {...props} />,
        },
        {
            widgetName: 'optionsJusticiaDerecho',
            widgetFunc: (props) => <OptionsJusticiaDerecho {...props} />,
        },
        {
            widgetName: 'optionsMedicinaySalud',
            widgetFunc: (props) => <OptionsMedicinaySalud {...props} />,
        },
        {
            widgetName: 'optionsArquitectura',
            widgetFunc: (props) => <OptionsArquitectura {...props} />,
        },
        {
            widgetName: 'optionsPolitica',
            widgetFunc: (props) => <OptionsPolitica {...props} />,
        },
        {
            widgetName: 'optionsCienciaInvestigacion',
            widgetFunc: (props) => <OptionsCienciaInvestigacion {...props} />,
        },
        {
            widgetName: 'optionsInnovacion',
            widgetFunc: (props) => <OptionsInnovacion {...props} />,
        },
        {
            widgetName: 'optionsIngenieria',
            widgetFunc: (props) => <OptionsIngenieria {...props} />,
        },
        {
            widgetName: 'optionsCienciasNaturales',
            widgetFunc: (props) => <OptionsCienciasNaturales {...props} />,
        },
        {
            widgetName: 'optionsMedioAmbiente',
            widgetFunc: (props) => <OptionsMedioAmbiente {...props} />,
        },
        {
            widgetName: 'optionsNoFiccion',
            widgetFunc: (props) => <OptionsNoFiccion {...props} />,
        },
        {
            widgetName: 'optionsFilosofia',
            widgetFunc: (props) => <OptionsFilosofia {...props} />,
        },
        {
            widgetName: 'optionsPoesia',
            widgetFunc: (props) => <OptionsPoesia {...props} />,
        },
        {
            widgetName: 'optionsArteLiteratura',
            widgetFunc: (props) => <OptionsArteLiteratura {...props} />,
        },    
        {
            widgetName: 'optionsEducacion',
            widgetFunc: (props) => <OptionsEducacion {...props} />,
        },
        {
            widgetName: 'optionsAmorPropio',
            widgetFunc: (props) => <OptionsAmorPropio {...props} />,
        },
        {
            widgetName: 'optionsLigero',
            widgetFunc: (props) => <OptionsLigero {...props} />,
        },
        {
            widgetName: 'optionsRomance',
            widgetFunc: (props) => <OptionsRomance {...props} />,
        },



    ],
    customMessages: {
        custom: (props) => <CustomMessage {...props} />,
      },

}

export default config;