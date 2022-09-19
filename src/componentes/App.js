import GlobalStyle from "../style/globalStyles";
import UserContext from './context/UserContext'; 
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./Home/Home";
import Login from "./signIn-signUp/SignIn";
import Cadastro from "./signIn-signUp/SignUp";
import Carrinho from "./Carrinho/Carrinho";
import PaginaDoProduto from "./PaginaDoProduto";
import Compra from './Compra';

import "../style/style.css"

export default function App() {
  const [userData, setUserData] = useState({})
  const [authorization, setAuthorization] = useState(false)
  const localToken = localStorage.getItem('token')
  const localUserName = localStorage.getItem('userName')
  console.log(localToken)
  
  return (
    <>
    <GlobalStyle/>
    <UserContext.Provider value={{
      userData, setUserData,
      authorization, setAuthorization,
      localToken, localUserName
      }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/:productId' element = {<PaginaDoProduto />} />
          <Route path='/signIn' element = {<Login />}/>
          <Route path='/signUp' element = {<Cadastro />}/>
          <Route path='/cart' element = {<Carrinho />}/>
          <Route path='/checkout' element = {<Compra />}/>
          
        </Routes>
      </BrowserRouter>      
      </UserContext.Provider>
    </>
  )
}
