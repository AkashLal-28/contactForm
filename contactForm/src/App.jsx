import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import ContactHeader from './Components/ContactHeader'
import ContactForm from './Components/ContactForm'


function App() {

  return (
    <>
      <Navigation/>
      <div className="main_container">
        <ContactHeader/>
        <ContactForm/>
      </div>
    </>
  )
}

export default App
