
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar'
import Landing from './pages/landing'
import About from './pages/about'
import Service from './pages/service'
import Contact from './pages/contact'

function App() {

  return (
    <>
       <BrowserRouter>
      <Navbar/>
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/*" element={<PageNotFound />} /> */}

        </Routes>
      </BrowserRouter>
      
     
     
    </>
  )
}

export default App
