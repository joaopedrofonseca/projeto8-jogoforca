import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import React from "react";

function App() {
  const [palavra, setPalavra] = React.useState("");
  const [inicio, setInicio] = React.useState(false);
  const [arrayPalavra, setArrayPalavra] = React.useState([])
  const [erro, setErro] = React.useState(0)
  const [corPalavra, setCorPalavra] = React.useState("palavra")
  const [listaLetras, setListaLetras] = React.useState([])
  const [click, setClick] = React.useState(0)
  const [arrayClicks, setArrayClicks] = React.useState([])

  return (
    <div className="app">

      <Jogo palavras={palavras}
        arrayClicks={arrayClicks} setArrayClicks={setArrayClicks}
        click={click} setClick={setClick}

        listaLetras={listaLetras}
        setListaLetras={setListaLetras}

        corPalavra={corPalavra}
        setCorPalavra={setCorPalavra}

        palavra={palavra} //imprime na tela!
        setPalavra={setPalavra}

        inicio={inicio} //habilita/desabilita teclado e input
        setInicio={setInicio}

        arrayPalavra={arrayPalavra}// transforma a string da palavra escolhida em array
        setArrayPalavra={setArrayPalavra}

        setErro={setErro}
        erro={erro} />

      <Letras
        click={click}
        setClick={setClick}
        listaLetras={listaLetras}
        setListaLetras={setListaLetras}
        inicio={inicio}
        setInicio={setInicio}
        arrayPalavra={arrayPalavra}
        palavra={palavra}
        setPalavra={setPalavra}
        erro={erro}
        setErro={setErro}
        setCorPalavra={setCorPalavra} />

      <Chute
        inicio={inicio}
        setInicio={setInicio}
        etInicio={setInicio}
        setCorPalavra={setCorPalavra}
        arrayPalavra={arrayPalavra}
        palavra={palavra}
        setPalavra={setPalavra}
        setErro={setErro} />
    </div>
  );
}

export default App;
