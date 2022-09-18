import GlobalStyle from "../style/globalStyles";
import UserContext from './context/UserContext'; 
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Home/Home";
import Login from "./signIn-signUp/SignIn";
import Cadastro from "./signIn-signUp/SignUp";
import Carrinho from "./Carrinho/Carrinho";

import "../style/style.css"

export default function App() {
  const [token, setToken] = useState([]);
  const [user, setUser] = useState({})
  
  
  return (
    <>
    <GlobalStyle/>
    <UserContext.Provider value={{
      token, setToken,
      user, setUser
      }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/signIn' element = {<Login />}/>
          <Route path='/signUp' element = {<Cadastro />}/>
          <Route path='/cart' element = {<Carrinho />}/>
        </Routes>
      </BrowserRouter>      
    </UserContext.Provider>
    </>
  )
}
