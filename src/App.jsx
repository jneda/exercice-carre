import { useState } from 'react'
import './App.css'
import Controls from './components/Controls'
import Square from './components/Square'

function App() {
  const [size, setSize] = useState("100px");
  const [color, setColor] = useState("aquamarine");
  const [display, setDisplay] = useState(true);

  return (
    <div className="App">
      <h1>Carré interactif !</h1>
      <div className="card">
        <Controls />
        <Square />
      </div>
    </div>
  )
}

export default App
