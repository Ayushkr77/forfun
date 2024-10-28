import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Geminiresponse from '../components/Geminiresponse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Geminiresponse/>
    </>
  )
}

export default App
