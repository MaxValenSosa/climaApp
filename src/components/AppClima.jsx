import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Sppiner from "./Sppiner"

const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima()
  
  return (
    <>
      <main className='dos-columnas'>
        <Formulario/>

        {cargando ? <Sppiner/> : resultado?.name ? <Resultado/> : noResultado ? <p>{noResultado}</p> : <p>El Clima se va a mostrar Aquí</p> }
        
      </main>
    </>
  )
}

export default AppClima
