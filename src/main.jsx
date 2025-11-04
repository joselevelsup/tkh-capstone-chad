import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  const [count, setCount] = useState(0)

  return (
     <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/men" element={<MensClothingPage />} />
        <Route path="/women" element={<WomenClothingPage />} />
        <Route path="/kids" element={<KidsClothingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}




