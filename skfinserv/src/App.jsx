import { useState } from 'react'
import './App.css'
import Services from "./sections/Services.jsx";
import Footer from "./sections/footer.jsx";
import Header from "./sections/header.jsx";
import Home from "./sections/home.jsx";

function App() {
  return (
    <>
        <Header/>
        <Home/>
        <Services/>
        <Footer/>
    </>
  )
}

export default App