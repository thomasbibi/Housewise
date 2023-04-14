import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import Steps from './components/Steps'
import Benifits from './components/Benifits'
import Advisors from './components/Advisors'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Services />
      <AboutUs />
      <Steps />
      <Benifits />
      <Advisors />
    </>
  )
}

export default App
