import { useState } from 'react'
import './App.css'
import SocialLinks from "./components/socialLinks.jsx";
import Card from "./components/card.jsx";

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
