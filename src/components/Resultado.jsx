import useClima from "../hooks/useClima"

const Resultado = () => {

  const {resultado} = useClima()
  
  const {name, main} = resultado

 const temperatura = parseInt(main.temp -273.15)
 const temperaturaMin = parseInt(main.temp_min -273.15)
 const temperaturaMax = parseInt(main.temp_max -273.15)

  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es: </h2>

      <p>
         {temperatura} <span>&#x2103;</span>
      </p>
      <div className="temp_min_max">
        <p>
          Mín: {temperaturaMin} <span>&#x2103;</span>
        </p>

        <p>
          Máx: {temperaturaMax} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}

export default Resultado
