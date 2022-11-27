import { isDisabled } from "@testing-library/user-event/dist/utils"
import React from "react"

export default function Chute({ inicio, setInicio, arrayPalavra, palavra, setPalavra, setErro, setCorPalavra }) {
    //input necessita estar desabilitado no inicio
    // e habilitar quando escolher palavra
    const [chutar, setChutar] = React.useState("")

    function chute() {
        let arrayChute = Array.from(chutar)
        setChutar("")
        for(let i=0; i < arrayChute.length;i++){
            if (arrayChute[i] === arrayPalavra[i] && arrayChute.length === arrayPalavra.length) {
                setPalavra(arrayChute)
                setCorPalavra("palavra ganhouVerde")
                setInicio(false)
            } else {
                setErro(6)
                setPalavra(arrayPalavra)
                setCorPalavra("palavra perdeuVermelho")
                setInicio(false)
            }
        }


    }
    return (
        <div className="chute">
            <h1>Já sei a palavra!</h1>
            <input
                data-test="guess-input"
                disabled={(inicio === false) ? true : false}
                value={chutar}
                onChange={e => setChutar(e.target.value)}></input>
            <button data-test="guess-button" className="botaoChute" onClick={chute} disabled={(inicio === false) ? true : false}>
                Chutar
            </button>

        </div >
    )
}