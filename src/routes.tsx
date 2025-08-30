// src/routes.tsx (VERSÃO FINAL E CORRETA)

import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product/ProductPage' // Correto
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} /> {/* Correto */}
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
