import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './context/CartProvider';
import { ProductProvider } from './context/ProductProvider';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProductList from './pages/Shop/components/ProductList/ProductList';
import ProductDetail from './pages/Shop/Details/ProductDetail';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import SignUp from './pages/Sign Up/SignUp';
import ContactPage from './pages/Contact/Contact';
import Membership from './pages/Membership/Membership';
import About from './pages/About/About';
import FAQSection from './pages/FAQ/FAQ';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <BrowserRouter basename="/web-shop/">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product/list" element={<ProductList />} />
            <Route path="/shop" element={<ProductList />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQSection />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </ProductProvider>
  )
}

export default App
