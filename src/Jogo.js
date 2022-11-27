import React from "react";

export default function Jogo({arrayClicks, setArrayClicks, setListaLetras, setClick, palavras, palavra, setPalavra, setInicio, arrayPalavra, setArrayPalavra, erro, setErro, corPalavra, setCorPalavra}) {
    const img = ["./assets/forca0.png", "./assets/forca1.png", "./assets/forca2.png", "./assets/forca3.png", "./assets/forca4.png", "./assets/forca5.png","./assets/forca6.png"]
    let random = Math.floor(Math.random()*palavras.length)

    function escolherPalavra(){
        let arrayP = Array.from(palavras[random])
        let arrayOculto = arrayP.map((letra) => "_")
        /*setArrayClicks(arrayP.forEach((e)=> {
            if (arrayClicks.includes(e)===false){
                arrayClicks.push(e)
            }
        }
            ))*/
        setArrayPalavra(arrayP)
        setInicio(true)
        setErro(0)
        setClick(0)
        setListaLetras([])
        setCorPalavra("palavra")
        setPalavra(arrayOculto)

        console.log(arrayP, arrayClicks)
    }

    return (
        <div className="jogo">
            <div className="forca">
                <img data-test="game-image"src = {img[erro]} />
            </div>
            <div className="botaoIniciar" onClick={escolherPalavra} data-test="choose-word">
                Escolher Palavra
            </div>
            <div className={corPalavra} data-test="word">
                {palavra}
            </div>
        </div>
    )
}