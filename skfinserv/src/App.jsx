import { useState } from 'react'
import './App.css'
import Services from "./sections/Services.jsx";
import Footer from "./sections/footer.jsx";
import Header from "./sections/header.jsx";
import Home from "./sections/home.jsx";
import ContactComponent from "./components/ContactUs/ContactComponent.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import './index.css';



function App() {
  return (
      <>
          <div className="no-tailwind">
              <Header isRootPage={true}/>
          </div>
          {/*<Header isRootPage={true}/>*/}
          <Home/>
          <Services/>
          <Testimonials/>
          <ContactComponent/>
          <Footer/>
      </>
  )
}

export default App