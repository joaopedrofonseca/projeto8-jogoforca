import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import React from "react";

function App() {
  const [palavra, setPalavra] = React.useState("");
  const [inicio, setInicio] = React.useState(false);
  const [arrayPalavra, setArrayPalavra] = React.useState([])

  return (
    <div className="app">

      <Jogo palavras={palavras}
        palavra={palavra} //imprime na tela!
        setPalavra={setPalavra}

        inicio={inicio} //habilita/desabilita teclado e input
        setInicio={setInicio}
            
        arrayPalavra={arrayPalavra}// transforma a string da palavra escolhida em array
        setArrayPalavra={setArrayPalavra} />

      <Letras inicio={inicio} />

      <Chute inicio={inicio}/>
    </div>
  );
}

export default App;
