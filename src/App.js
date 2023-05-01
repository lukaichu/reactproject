import Navbar from "./Navbar"
import Products from "./pages/Products"
import Home from "./pages/Home"
import About from "./pages/About"
import Contacts from "./pages/Contacts"
import { Route, Routes } from "react-router-dom"
import Footer from "./Footer/Footer"
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Cart from './pages/Cart'
import { CartProvider } from "./pages/CartContext"

function App() {
  return (
    <>
    <CartProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/protein" element={<Page1 />} />
          <Route path="/creatine" element={<Page2 />} />
          <Route path="/gainer" element={<Page3 />} />
          <Route path="/bcaa" element={<Page4 />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
      </CartProvider>
    </>
  )
}

export default App



