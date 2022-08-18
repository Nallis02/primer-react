import React, { Component } from 'react'
import Button from './Button'
import "./App.css";

export default class App extends Component {
  colors = ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]

  constructor() {
    super();

    this.state = {
      colors: ["RED", "BLUE", "YELLOW", "GREEN", "ORANGE", "MAGENTA", "BROWN", "LIME"]
    }
  }

  /* ESPACIO DE TRABAJO
  - Armar la estructura para una Class Component
  
  - Hacer un state con el arreglo de los colores
  - Vamos a usar una funcion shuffle mas abajo y vamos a enviarla por props... que
    formas tenemos para no perder el contexto?
  */

  Shuffle = () => {
    this.setState(
      {
        colors: this.colors.sort((a, b) => 0.5 - Math.random())
      }
    )
  }

  /* ESPACIO DE TRABAJO
  Funcion Shuffle
  Aqui deberan hacer una funcion que me retorne un nuevo arreglo con los
  colores mezclados
  */


  render() {
    return (
      <div className="container">
        <div className="panel">
          {this.state.colors.map(color => <div key={color} className={color}>{color}</div>)}
        </div>
        <Button fn={this.Shuffle()} />
      </div>

    )
  }
}