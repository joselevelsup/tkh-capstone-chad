
// main.jsx
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('https://pzqpjhdalynqqdtztgxj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6cXBqaGRhbHlucXFkdHp0Z3hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyMzUwNjksImV4cCI6MjA3ODgxMTA2OX0.P5MORVHxQwRMKAZwoPpci-nvsMr6zYykWPPVtwLUE_Y')
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

//Import Pages
import Home from './pages/Home'
import MensClothing from './pages/MensClothing'
import WomenClothing from './pages/WomenClothing'
import KidsClothing from './pages/KidsClothing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Contact from './pages/Contact'
import About from './pages/About'
import Checkout from './pages/Checkout'


//Setup Routing
function App() {
  return (
    <Router>
      <Navbar />
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
    </Router>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>









