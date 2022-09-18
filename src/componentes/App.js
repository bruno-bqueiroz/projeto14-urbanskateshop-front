import GlobalStyle from "../style/globalStyles";
import UserContext from '../context/UserContext'; 
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from "./Home";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Carrinho from "./Carrinho";
import PaginaDoProduto from "./PaginaDoProduto";

export default function App() {
  const [token, setToken] = useState([]);
  return (
    <>
    <GlobalStyle/>
    <UserContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}/>
          <Route path='/:ID' element = {<PaginaDoProduto />} />
          <Route path='/signIn' element = {<Login />}/>
          <Route path='/signUp' element = {<Cadastro />}/>
          <Route path='/cart' element = {<Carrinho />}/>
        </Routes>
      </BrowserRouter>      
    </UserContext.Provider>
    </>
  )
}
