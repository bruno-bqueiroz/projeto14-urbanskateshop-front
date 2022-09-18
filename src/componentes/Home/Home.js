import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import RenderProducts from "./RenderProducts";
import jan_korpriva from '../../images/jan-kopriva-oK2OoXCpOB4-unsplash.jpg'
import PH_flip from '../../images/ph_flip.png'

export default function Home (){
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);

    //changing navbar when scrolling
    const [color, setColor] = useState(false)
    const changeColor = ()=>{
        if (window.scrollY >= 300){
            setColor(true)
        }else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    useEffect (()=>{
        axios.get('http://localhost:5000/products').then(res =>{
            console.log('entrou dentro do then')
            setProdutos(res.data);
        }).catch(erro=>{
            console.log('entrou dentro do catch')
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
            <Header Bg={color? 'rgb(0,0,0,0.8)' : 'rgb(0,0,0,0)'}>
                <div className="logo">
                    <h1>URBAN</h1>
                </div>
                
                <div className="nav-menu">
                    <ion-icon  name="cart" onClick={irParaCarrinho}></ion-icon>
                    <p onClick={irParaLogin}>Entrar / Cadastrar</p>
                </div>
            </Header>
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
const Header = styled.header`
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 10px;
    color: white;
    background-color: ${props => props.Bg};
    transition: 500ms ease-in-out background-color,
                500ms ease-in-out box-shadow;

    position: fixed;
    top: 0;
    z-index: 3;

    div{
        height: 60px;
        display: flex;
        align-items: center;
    }

    div.logo{
        justify-content: flex-start;
        margin-left: 7vw;
    }

    div.nav-menu{
        justify-content: flex-end;
        margin-right: 2vw;
        gap:16px
    }

    h1{
        font-family: "urbanJungle";
        font-size: 46px;
        text-align: center;
        font-weight: 400;
        margin-top: 10px;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size:20px;
        text-align: center;
        margin: 0;
        cursor: pointer;
    }
    ion-icon{
        width: 40px;
        height: 40px;
        margin-left: 20%;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        h1{
            font-size: 30px;
        }
        p{
            font-size:16px;
            width: 50%;
        }
        ion-icon{
            width: 26px;
            height: 26px;
        }

        div.nav-menu{
        gap:0px;
        justify-content: flex-end;
        margin-right: 2vw;
    }
    }
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
