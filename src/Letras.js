import React from "react"

export default function Letras({ inicio,setInicio, arrayPalavra, palavra, setPalavra, setErro, erro, setCorPalavra}) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="letras">
            {alfabeto.map((l) => <Letra l={l.toUpperCase()} id={l} inicio={inicio} setInicio={setInicio} arrayPalavra={arrayPalavra} palavra={palavra} setPalavra={setPalavra} setErro={setErro} erro={erro} setCorPalavra={setCorPalavra}/>)}
        </div >
    )
}

function Letra({ l, id, inicio,setInicio, arrayPalavra, palavra, setPalavra, setErro, erro, setCorPalavra}) {
    const [listaLetras, setListaLetras] = React.useState([])
    function clickLetra(letra) {
        if (arrayPalavra.includes(id) && !listaLetras.includes(id)){
            let novoArray = []
            setListaLetras([...listaLetras, id])
        arrayPalavra.forEach((e) => {
            if (e === id) { novoArray.push(id) }
            else if (e !== "_" && palavra.includes(e)) { novoArray.push(e) }
            else { novoArray.push("_") }})
        setPalavra(novoArray) }

        else{
            setListaLetras([...listaLetras, id])
            let error = erro+1;
            setErro(error)
            confereJogo()
        }
        console.log(arrayPalavra)
    }

    function confereJogo(){
        if (erro > 4){
            setPalavra(arrayPalavra)
            setCorPalavra("palavra perdeuVermelho")
            setInicio(false)
        } else if (palavra.indexOf("_") === -1){
            console.log(palavra.indexOf("_"))
            setPalavra(arrayPalavra)
            setInicio(false)
            setCorPalavra("palavra ganhouVerde")
        }
        
    }
    return (
        <button
            disabled={(inicio === false) ? true : false}
            className={!inicio || listaLetras.includes(id) ? "letra ldesabilitado" : "letra "}
            onClick={()=>clickLetra(id)}
            id={id}> {l} </button>
    )
}
