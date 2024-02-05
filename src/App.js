import './App.css';import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main'
import Login from './pages/Login/Login';
import Error404 from './pages/Error404/Error404';
import Store from './pages/Store/Store';
import FAQ from './pages/FAQ/FAQ';
import Admin from './pages/Admin/AdminPage';
import User from './pages/Admin/UserPage';
import Order from './pages/Admin/OrderPage';
import Product from './pages/Admin/ProductPage';
import SignUp from './pages/SignUp/Signup';
import Terms from './pages/SignUp/Terms';
import Dog from './pages/Store/Dog';
import Cat from './pages/Store/Cat';
import Modify from './pages/MyPage/User_Modify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/login" element={<Login />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/signUp" element={<SignUp />}/>
          <Route path="/user" element={<User />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/modify" element={<Modify />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
