import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect,useContext } from "react";
import axios from "axios";

import RenderProducts from "./RenderProducts";
import jan_korpriva from '../../images/jan-kopriva-oK2OoXCpOB4-unsplash.jpg'
import PH_flip from '../../images/ph_flip.png'
import UserContext from "../context/UserContext";
import Navbar from "../shared/NavBar";

export default function Home (){
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);


    useEffect (()=>{
        axios.get('https://projeto14-urbansk8shop-back.herokuapp.com/products').then(res =>{
            setProdutos(res.data);
        }).catch(erro=>{
            console.log(erro)
         })
    },[])

    function irParaLogin(){
        navigate('/signIn')
    }

    function irParaCarrinho(){
        navigate('/cart')
    }

    return (
        <>
        <Body>
            <Navbar/>
            <Background >
            </Background>
            <h1>Ofertas</h1>
            <Container>
                {!produtos ? <h1>Carregando Produtos...</h1>:
                    <RenderProducts produtos = {produtos}/>
                }
            </Container>
        </Body>
        </>
    )
}

const Body = styled.div`
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Urbanist', sans-serif;
    font-size: 30px;
    font-weight: 700;
    background: #fff;
    color: #222529;
    
`

const Background = styled.div`
    width: 100vw;
    height: 60vh;
    background-image: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 70%,#ffffff 100%),
    url(${jan_korpriva});
    background-size: cover;
    background-position: center;
    margin-bottom: 20px;
    z-index: 0;

    @media (max-width: 800px) {
    background-image: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 70%,#ffffff 100%),
    url(${PH_flip});
} 
`

const Container = styled.div`
    width: 100%;
    height: auto;
    display: inline-grid;
    margin: 20px auto 10vh auto;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 20px;
     background: #fff;
   

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
`
