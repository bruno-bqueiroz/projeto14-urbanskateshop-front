import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext.js";

export default function Carrinho (){
    /* const { token } = useContext(UserContext); */
    const { token } = {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzI3NWNlY2U2MDVjNjlkOTZhNDFmMWUiLCJpYXQiOjE2NjM1MjQwODl9.boJwSJ_KxZFi3wod0sm_CoLNwdFXQA2-dFCjd0RDYh8"
      }
    const navigate = useNavigate()
    const [carrinho, setCarrinho] = useState([]);
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
            setCarrinho(res.data.products);
        }).catch(erro=>{
            console.log('entrou dentro do catch')
            console.log(erro)
         })
    },[])

    console.log(carrinho)

    function irParaLogin(){
        navigate('/signIn')
    }
    function irParaCadastro(){
        navigate('/signUp')
    }
    function finalizarCompra(){
        axios.post ('http://localhost:5000/checkout', {
            payment: 3000000
        }, config).then(res =>{
            console.log(res)
            navigate('/checkout')
        }).catch(error => console.error(error))
        
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
            <div>
                <ion-icon name="cart"></ion-icon>
            </div>
        </Header>
        <Corpo>
        {!carrinho ? <h1> Carregando Produtos do carrinho </h1> : 
        carrinho.map((value, index) => 
            <Container key={index}>
                <img src={value.url_image} alt ={value.description} />
                <div >
                    <h1>{value.description}</h1>
                    <p>R$ {value.newValue/100}</p>            
                </div>
            </Container>
        )} 
        <button onClick={finalizarCompra}> Finalizar a Compra </button>
        </Corpo>
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
const Container = styled.div`
    margin-bottom: 10px;
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    img{
        width: auto;
        height: 16vh;
    }
    div {
        display: flex;
    }
    div h1{
        width: 50vw;
        font-size: 4vw;
    }
    div p{
        font-size: 5vw;
        color: red;
    }
    
`
const Corpo = styled.div`
    width: 100%;
    margin-top: 12vh;
    button{
        background-color: royalblue;
        position: fixed;
        bottom: 2vw;
        right: 0;
    }

`