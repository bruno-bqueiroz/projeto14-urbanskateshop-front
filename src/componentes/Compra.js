import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./context/UserContext";
import Navbar from "./shared/NavBar";
import { useNavigate } from "react-router-dom";

export default function Compra (){
    const navigate = useNavigate()
    const [compras, setCompras] = useState([]);
    const { userData, localToken } = useContext(UserContext);
    const [token, setToken] = useState(userData.token || localToken)
    
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
    
    useEffect (()=>{
        
        axios.get('https://projeto14-urbansk8shop-back.herokuapp.com/checkout', config
        ).then(res =>{
            setCompras(res.data);
        }).catch(erro=>{
            console.error(erro)
            navigate('/signIn')
         })
    },[])

    return (
        <>
        <Body>
        <Navbar color='black'/>
        <Corpo>
        {!compras ? <h1> Carregando Produtos do carrinho </h1> : 
        compras.map((value, index) => 
        <Caixa key={index}>
            <p className="data">Data da compra : {value.paymentTime}</p>
            {value.products.map((produtos, index)=>
            <Container key={index}>
                <img src={produtos.url_image} alt ={produtos.description} />
                
                <div >
                    <h1>{produtos.description}</h1>
                    <p>R$ {produtos.newValue/100}</p>   
                </div>    
            </Container>
            )}
            <span><div>
            <p>Produto Enviado!</p>  
            <b>Total da Compra R$ {value.amount/100}</b> 
            </div></span>
        </Caixa>
        )} 
        </Corpo>
        </Body>
        </>
    )
}

const Body = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 8vw;
    font-weight: 700;
    background-color: #e9ecef;
    
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
    height: 10vh;
    
    img{
        width: auto;
        height: 100%;
    }
    div {
        display: flex;
    }
    div h1{
        width: 50vw;
        font-size: 2vw;
        font-weight: 300;
        color: #6c757d;
    }
    div p{
        font-size: 3vw;
        color: #495057;
    }
    
`
const Corpo = styled.div`
    width: 90%;
    margin: 10vh;
    button{
        background-color: royalblue;
        position: fixed;
        bottom: 2vw;
        right: 0;
    }

`
const Caixa = styled.div`
    margin-top: 20px;
    border: solid 1px #f8f9fa;
    border-radius: 2vw ;
    background-color: #f8f9fa;
span div{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1vh;
   
    p{
        font-size: 2vw;
        font-weight: 500;
        color: #212529;
    }
    b{
        font-size: 2vw;
        font-weight: 800;
        color: #212529;
    }

    
}
p.data {
        font-size: 10px;
        margin: 5px 0 0 10px;
    }

`