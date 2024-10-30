import React from 'react'
import './ShowCount.css'

function ShowCount(props) {
  return (
    <div className='show-count'>
      <h2>
        ¿Cuántas le quedan? {props.apples}
        {props.apples <= 0
          ? '  ¡Toca comprar manzanas, que se las roba!'
          : ' manzanas'}
      </h2>
    </div>
  )
}

export default ShowCount
