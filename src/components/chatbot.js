import {useState, useEffect} from 'react'

export default function Chatbot(){
    
    //const [input, setInput] = useState("matematicas calculo ingenieria")

    useEffect(() => {
        //handleRecommendation();
    })

    async function handleRecommendation(){
        try {
            const request = await fetch('http://127.0.0.1:5000/getRec',{
                'method' : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({input: input})
            }).then(response => response.json())
            .then((rec) => {
                console.log(rec);
            })
        } catch (error) {
            console.log(error);          
        }
    }

    return (
        <div>Hola</div>
    )
}

