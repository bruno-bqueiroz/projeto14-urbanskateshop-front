import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext.js";

export default function Compra (){

    const { token } = useContext(UserContext);
    const navigate = useNavigate()
    const [compras, setCompras] = useState([]);
    console.log(token)
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    
    useEffect (()=>{
        
        axios.get('http://localhost:5000/cart', config
        ).then(res =>{
            console.log('entrou dentro do then')
            setCompras(res.data);
        }).catch(erro=>{
            console.log('entrou dentro do catch')
            console.log(erro)
         })
    },[])

    console.log(compras)

    function irParaLogin(){
        navigate('/signIn')
    }
    function irParaCadastro(){
        navigate('/signUp')
    }
    function irParaCarrinho(){
        navigate('/cart')
    }

    return (
        <>
        <Body>
        <Header>
            <div>
                <p onClick={irParaLogin}> Entrar /</p> <p onClick={irParaCadastro}>Cadastrar</p>
            </div>
            <div>
            <h1>URBAN</h1>
            </div>
            <div onClick={irParaCarrinho}>
                <ion-icon name="cart"></ion-icon>
            </div>
        </Header>
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
    font-size: 8vw;
    font-weight: 700;
    
`
const Header = styled.div`
    width: 100%;
    height: 12vh;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 1;

    border-bottom: 1px  solid;
    box-shadow: 0px 1px 15px black;
    background-color: white;

    h1{
    font-family: "urbanJungle";
    font-size: 10vw;
    text-align: center;
    margin: 0;
    }
    p{
    font-family: "aDrip";
    font-size:5vw;
    text-align: center;
    margin: 0;
    }
    ion-icon{
    width: 10vw;
    height: 10vw;
    margin-left: 20%;
    }
`