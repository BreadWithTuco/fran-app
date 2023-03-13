
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Index } from './assets/pages/Index'
import { Products } from './assets/pages/Products'
import { NavBar } from './assets/components/NavBar'
import { Services } from './assets/pages/Services'

function App() {


  return (
    <div>
      <Router>
        <div className='naav'>
          <NavBar/> 
          <div>
            <Routes>
              <Route path='/' element={<Index/>}/>
              <Route path='products' element={<Products/>}/>
              <Route path='services' element={<Services/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
