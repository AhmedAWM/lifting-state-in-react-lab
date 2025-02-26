import { useState } from 'react'
import './App.css'
import AvailableIngredients from './data/AvailableIngredients'

function App() {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [count, setCount] = useState(0);
  const [burgerStack, setBurgerStack] = useState([]);
  
  // Adding new ingredient to the burger
  const handleAddIngredient = ((ingredient) => {
    setStack([ingredient, ...burgerStack]);
  });

  // Remove an ingredient from the burger
  const handleRemoveIngredient = ((index) => {
    const newBurgerStack = [...burgerStack];
    newBurgerStack.splice(index, 1);
    setStack(newBurgerStack);
  });

  // Start over making burgers
  const startOver = (() => {
    setStack([]);
  });



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