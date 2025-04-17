import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Clima from './pages/Clima'
import Contador from './pages/Contador'
import ListaDeTareas from './pages/ListaDeTareas'
import Home from "./pages/Home"
import { LenguageProvider } from './context/LanguajeContext'
import Navbar from './Navbar'

function App() {

  return (
    <div className='min-h-screen flex flex-col bg-white'>
    <BrowserRouter>
    <LenguageProvider>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/clima" element={<Clima/>}/>
      <Route path="/contador" element={<Contador/>}/>
      <Route path="/lista" element={<ListaDeTareas/>}/>
    </Routes>
    </LenguageProvider>
    </BrowserRouter>
    </div>
  )
}

export default App