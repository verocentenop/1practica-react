import React from 'react'
import './ShowCount.css'

function ShowCount({ apples }) {
  return (
    <div className='show-count'>
      <h2>¿Cuántas le quedan? {apples}</h2>
    </div>
  )
}

export default ShowCount
