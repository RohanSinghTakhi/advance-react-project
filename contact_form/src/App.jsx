import { useState } from 'react'

import './App.css'
import Navigation from './components/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'


import ContactForm from './components/ContactForm/ContactForm'

function App() {


  return (
    <>
      <Navigation>

      </Navigation>
      <ContactHeader></ContactHeader>
      <ContactForm></ContactForm>
    </>
  )
}

export default App
