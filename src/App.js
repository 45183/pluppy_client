import './App.css';import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main'
import Login from './pages/Login/Login';
import Error404 from './pages/Error404/Error404';
import Store from './pages/Store/Store';
import ProductDetail1 from './components/Product/ProductDetail1';
import ProductDetail2 from './components/Product/ProductDetail2';
import Detail from './components/ProductDetail/detail';
import FAQ from './pages/FAQ/FAQ';
import Admin from './pages/Admin/AdminPage';
import User from './pages/Admin/UserPage';
import Order from './pages/Admin/OrderPage';
import Product from './pages/Admin/ProductPage';
import SignUp from './pages/SignUp/Signup';
import Terms from './pages/SignUp/Terms';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route exact path="/store/:id" element={<Detail />} />
          <Route path="/dog" element={<ProductDetail1 />} />
          <Route path="/cat" element={<ProductDetail2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path="/user" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
