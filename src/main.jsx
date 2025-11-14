import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'



// Import Routing Components from react-router-dom
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


//Import Pages
import Home from './pages/Home.jsx';
import MensClothing from './pages/MensClothing.jsx';
import WomenClothing from './pages/WomenClothing.jsx';
import KidsClothing from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Checkout from './pages/Checkout.jsx';



//Setup Routing
function App() {
  return (
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MensClothing />} />
        <Route path="/women" element={<WomenClothing/>} />
        <Route path="/kids" element={<KidsClothing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </Router>
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)










