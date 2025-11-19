
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MensClothing from './pages/MensClothing'
import WomenClothing from './pages/WomenClothing'



//import KidsClothing from './pages/KidsClothing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import About from './pages/About'
import Checkout from './pages/Checkout'


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-base-100">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MensClothing />} />
            <Route path="/women" element={<WomenClothing />} />
            <Route path="/kids" element={<KidsClothing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
