import GlobalStyle from "../style/globalStyles";
import UserContext from './shared/context/UserContext'; 
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Home/Home";
import SignIn from "./signIn-signUp/SignIn";
import SignUp from "./signIn-signUp/SignUp";
import CartPage from "./Cart/CartPage";
import ProductPage from "./Product/ProductPage";
import Checkout from './Checkout/Checkout';

import "../style/style.css"

export default function App() {
  const [userData, setUserData] = useState({})
  const localToken = localStorage.getItem('token')
  const localUserName = localStorage.getItem('userName')
  
  return (
    <>
    <GlobalStyle/>
    <UserContext.Provider value={{
      userData, setUserData,
      localToken, localUserName
      }}>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/:productId' element = {<ProductPage />} />
          <Route path='/signIn' element = {<SignIn />}/>
          <Route path='/signUp' element = {<SignUp />}/>
          <Route path='/cart' element = {<CartPage />}/>
          <Route path='/checkout' element = {<Checkout />}/>
        </Routes>
      </UserContext.Provider>
    </>
  )
}
