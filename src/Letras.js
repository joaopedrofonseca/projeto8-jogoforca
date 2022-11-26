import React from "react"

export default function Letras({inicio}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="letras">
            {alfabeto.map((l)=> <Letra l = {l.toUpperCase()} id={l} inicio={inicio}/>)}
        </div >
    )
}

function Letra({l, id, inicio}){
    return(
        <div 
        className= {inicio ? "letra" : "letra ldesabilitado"}
        id = {id}> {l} </div>
    )
}
