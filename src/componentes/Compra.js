import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./context/UserContext";
import Navbar from "./shared/NavBar";

export default function Compra (){

    const { userData } = useContext(UserContext);
    console.log(userData)
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }

    const navigate = useNavigate()
    const [compras, setCompras] = useState([]);
    
    
    useEffect (()=>{
        
        axios.get('https://projeto14-urbansk8shop-back.herokuapp.com/checkout', config
        ).then(res =>{
            console.log('entrou dentro do then')
            setCompras(res.data);
        }).catch(erro=>{
            console.log('entrou dentro do catch')
            console.log(erro)
         })
    },[])

    console.log(compras)

    return (
        <>
        <Body>
        <Navbar color='black'/>
        <Corpo>
        {!compras ? <h1> Carregando Produtos do carrinho </h1> : 
        compras.map((value, index) => 
        <Caixa key={index}>
            {value.products.map((produtos, index)=>
            <Container key={index}>
                <img src={produtos.url_image} alt ={produtos.description} />
                <div >
                    <h1>{produtos.description}</h1>
                    <p>R$ {produtos.newValue/100}</p>            
                </div>
            </Container>
            )}
        </Caixa>
        )} 
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
const Caixa = styled.div`
    margin-top: 20px;
    border: solid 1px;

`