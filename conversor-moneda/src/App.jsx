import { useRef, useState, useEffect } from 'react'
import './App.css'

function App() {

  const[valorCambio, setValorCambio] = useState(null);

  const dolarRef = useRef();
 
  const resultref = useRef();

  useEffect(()=>{
    const llamaApiCambio = async()=>{
      
      try{
        const respuesta = await fetch("https://dolarapi.com/v1/dolares/blue");

        const datos = await respuesta.json();

        setValorCambio(datos.venta)


      }catch(error){

        console.error("Error al acceder a la API: ", error);



      }



    };

    llamaApiCambio();
  }, []);

  const calcular = ()=> {
    const dolarValor = dolarRef.current.value;

    const pesosArg = dolarValor*valorCambio;

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
