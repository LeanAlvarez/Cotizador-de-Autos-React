import React, { Component } from 'react';
import Header from './Header'
import Formulario from './Formulario';
import Resumen from './Resumen'
import Resultado from './Resultado'
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';

class App extends Component {

  //state

  state = {
    resultado: '',
    datos: {}
  }



  cotizarSeguro = (datos) => {
      const {marca, plan, year} = datos

      //agregar base de 2000

      let resultado = 2000

      //obtener la diferencia de años

      const diferencia = obtenerDiferenciaAnio(year)

      //por cada año restar el 3%
      resultado = calcularMarca(marca) * resultado

      //Americano 15% Asiatico 5% Europeo 30% de incremento
      let incrementoPlan = obtenerPlan(plan)


      //dependiendo el plan incrementar
      resultado = parseFloat(incrementoPlan * resultado).toFixed(2)

      //crear objeto para el resumen
      const datosAuto = {
        marca: marca,
        plan: plan,
        year: year
      }

      this.setState({
        resultado: resultado,
        datos: datosAuto
      })


  }

  render(){
    return (
      <div className="contenedor">
        <Header
          titulo='Cotizador de seguro de autos'
        />

        <div className="contenedor-formulario">

          <Formulario
            cotizarSeguro={this.cotizarSeguro}
          />

          <Resumen
            datos={this.state.datos}
          />
           <Resultado
            resultado={this.state.resultado}
            />

        </div>

      </div>
    );
  }
}
export default App;
