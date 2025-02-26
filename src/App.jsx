import { useState } from 'react'
import './App.css'
import AvailableIngredients from './data/AvailableIngredients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      <IngredientList />
      <BurgerStack />
      </section>
    </main>
  )
}

export default App