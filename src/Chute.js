export default function Chute({inicio}) {
    //input necessita estar desabilitado no inicio
    // e habilitar quando escolher palavra
    
    return (
        <div className="chute">
            <h1>Já sei a palavra!</h1>
            <input disabled ></input> 
            <div className="botaoChute">
                Chutar
            </div>

        </div >
    )
}