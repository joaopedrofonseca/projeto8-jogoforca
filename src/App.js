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


  return (
    <div className="app">

      <Jogo palavras={palavras}

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
