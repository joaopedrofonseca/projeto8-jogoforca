import React from "react"

export default function Letras({arrayClicks, setArrayClicks, click, setClick, listaLetras, setListaLetras, inicio, setInicio, arrayPalavra, palavra, setPalavra, setErro, erro, setCorPalavra }) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return (
        <div className="letras">
            {alfabeto.map((l) => <Letra l={l.toUpperCase()}  setArrayClicks={setArrayClicks} arrayClicks={arrayClicks} click={click} setClick={setClick} listaLetras={listaLetras} setListaLetras={setListaLetras} id={l} inicio={inicio} setInicio={setInicio} arrayPalavra={arrayPalavra} palavra={palavra} setPalavra={setPalavra} setErro={setErro} erro={erro} setCorPalavra={setCorPalavra} />)}
        </div >
    )
}
function Letra({ l, id, inicio, setInicio,click, setClick, arrayClicks, arrayPalavra, palavra, setPalavra, setErro, erro, setCorPalavra, listaLetras, setListaLetras }) {
    function clickLetra(letra) {
        if (arrayPalavra.includes(id) && !listaLetras.includes(id)) {
            let novoArray = []
            setListaLetras([...listaLetras, id])
            arrayPalavra.forEach((e) => {
                if (e === id) { novoArray.push(id) }
                else if (e !== "_" && palavra.includes(e)) { novoArray.push(e) }
                else { novoArray.push("_") }
            })
            setClick(click+1)
            setPalavra(novoArray)
            if (!novoArray.includes("_")) {
                setPalavra(arrayPalavra)
                setInicio(false)
                setCorPalavra("palavra ganhouVerde")
            }
        }else {
            setListaLetras([...listaLetras, id])
            let error = erro + 1;
            setErro(error)
            confereJogo()
        }
    }

    function confereJogo() {
        if (erro > 4) {
            setPalavra(arrayPalavra)
            setCorPalavra("palavra perdeuVermelho")
            setInicio(false)
    }}
    return (
        <button
            disabled={(inicio === false) ? true : false}
            className={!inicio || listaLetras.includes(id) ? "letra ldesabilitado" : "letra "}
            data-test="letter"
            onClick={() => clickLetra(id)}
            id={id}> {l} </button>
    )
}
