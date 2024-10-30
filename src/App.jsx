import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'

function App() {
  const [apples, setApples] = useState(0)

  const buyApple = () => setApples(apples + 1)

  const eatApple = () => setApples(apples - 1)

  return (
    <div className='App'>
      <h1> Pablito y sus manzanas 🍏 🍎 </h1>
      <p>
        Este niño simpático y glotón compra y come manzanas sin ninguna
        compasión.
      </p>
      <button onClick={buyApple}>Compra una manzana </button>
      <button onClick={eatApple}>Se come una manzana</button>
      <ShowCount apples={apples} />
    </div>
  )
}

export default App
