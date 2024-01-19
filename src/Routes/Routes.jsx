import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main'
import Login from '../pages/Login/Login';
import Error404 from '../pages/Error404';
import Search from '../pages/Search';
import Store from '../pages/Store';
const AppRoute = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    )
}
export default AppRoute;