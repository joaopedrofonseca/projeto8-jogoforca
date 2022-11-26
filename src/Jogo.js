import React from "react";

export default function Jogo({palavras, palavra, setPalavra, setInicio, arrayPalavra, setArrayPalavra}) {
    const img = ["./assets/forca0.png", "./assets/forca1.png", "./assets/forca2.png", "./assets/forca3.png", "./assets/forca4.png", "./assets/forca5.png","./assets/forca6.png"]
    let random = Math.floor(Math.random()*palavras.length)

    function escolherPalavra(){
        //necessita habilitar input!
        let arrayP = Array.from(palavras[random])
        let arrayOculto = arrayP.map((letra) => "_")

        setArrayPalavra(arrayP)
        setInicio(true)
        setPalavra(arrayOculto)

        console.log(palavra, arrayPalavra)
    }

    return (
        <div className="jogo">
            <div className="forca">
                <img src = {img[0]} />
            </div>
            <div className="botaoIniciar" onClick={escolherPalavra}>
                Escolher Palavra
            </div>
            <div className="palavra">
                {palavra}
            </div>
        </div>
    )
}