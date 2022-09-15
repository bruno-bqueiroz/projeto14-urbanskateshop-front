import GlobalStyle from "../style/globalStyles";
import UserContext from '../context/UserContext'; 
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function App() {
  const [token, setToken] = useState([]);
  return (
    <>
    <GlobalStyle/>
    <UserContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>      
    </UserContext.Provider>
    </>
  )
}
