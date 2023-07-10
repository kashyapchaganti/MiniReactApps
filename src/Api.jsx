import { useState, useEffect } from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function Api(){
    const [state, setState]= useState({text:"", author:""});
    useEffect(()=>{
        fetchQ();
    },[])
    async function fetchQ(){
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse  = await response.json();
        const quote = jsonResponse.quote.text;
        setState(e=>{
            return {...e,text:quote,author:jsonResponse.quote.author}
        })
    }
    return (
        <div>
            <button onClick={fetchQ}> Get a Quote</button>
            <p>{state.text}</p>
            <p>{state.author}</p>
        </div>
    )
}