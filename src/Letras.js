import React from "react"

export default function Letras({ inicio, arrayPalavra, palavra, setPalavra, setErro, erro, setCorPalavra}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="letras">
            {alfabeto.map((l) => <Letra l={l.toUpperCase()} id={l} inicio={inicio} arrayPalavra={arrayPalavra} palavra={palavra} setPalavra={setPalavra} setErro={setErro} erro={erro} setCorPalavra={setCorPalavra}/>)}
        </div >
    )
}

function Letra({ l, id, inicio, arrayPalavra, palavra, setPalavra, setErro, erro, setCorPalavra}) {

    function clickLetra() {
        let error = 0;
        if (arrayPalavra.includes(id)){
            let novoArray = []
        arrayPalavra.forEach((e) => {
            if (e === id) { novoArray.push(id) }
            else if (e !== "_" && palavra.includes(e)) { novoArray.push(e) }
            else { novoArray.push("_") }})
        setPalavra(novoArray) }

        else{
            let error = erro+1;
            setErro(error)
            confereJogo()
        }
    }

    function confereJogo(){
        if (erro > 4){
            setPalavra(arrayPalavra)
            setCorPalavra("palavra perdeuVermelho")
        } else if (palavra === arrayPalavra){
            setCorPalavra("palavra ganhouVerde")
        }
    }
    return (
        <div
            className={inicio ? "letra" : "letra ldesabilitado"}
            onClick={clickLetra}
            id={id}> {l} </div>
    )
}
