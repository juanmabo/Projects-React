import { useRef } from 'react'
import './App.css'

function App() {
  const dolarRef = useRef();
 
  const resultref = useRef();

  const calcular = ()=> {
    const dolarValor = dolarRef.current.value;

    const pesosArg = dolarValor*988;

    resultref.current.innerHTML="$" + pesosArg.toFixed(2);

  }
  return (
    <div>

      <h1>Conversor Dolar-Peso Argentino</h1>
      <input type="text" ref={dolarRef} />
      <button onClick={calcular}>Convertir</button>
      <div ref={resultref}>

      </div>


    </div>
  )
}

export default App
