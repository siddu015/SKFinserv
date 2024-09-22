import { useState } from 'react'
import './App.css'
import SocialLinks from "./socialLinks.jsx";
import Card from "./card.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <SocialLinks/>
        <Card/>
    </>
  )
}

export default App
