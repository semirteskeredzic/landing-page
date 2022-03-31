import React, { useState, useEffect } from 'react'
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Product from './Components/Product';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Category from './Components/Category';
import { getCategories } from './Services/ProductsService';

function App() {

  const [categories, setCategories] = useState([])

  useEffect(() => {
      getCategories().then(res => setCategories(res.data))
  },[])

  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation categories={categories} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/products/category/:category" element={<Category />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
