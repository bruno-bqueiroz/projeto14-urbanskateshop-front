import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext.js";

import Navbar from "../shared/NavBar.jsx";

export default function Carrinho (){
    const navigate = useNavigate()
    const [carrinho, setCarrinho] = useState([]);
    const { userData, localToken } = useContext(UserContext);
    const [token, setToken] = useState(userData.token || localToken)
    
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
    
    useEffect (()=>{
        
        axios.get('https://projeto14-urbansk8shop-back.herokuapp.com/cart', config
        ).then(res =>{
            setCarrinho(res.data.products);
        }).catch(erro=>{
            console.error(erro)
            if(erro.response?.status !== 404) navigate('/signIn')
         })
    },[])
    let total = 0;
    carrinho.map (value => total +=value.newValue)
    total = total/100


    function finalizarCompra(){
        axios.post ('https://projeto14-urbansk8shop-back.herokuapp.com/checkout', {
            payment: 3000000
        }, config).then(res =>{
            navigate('/checkout')
        }).catch(error => console.error(error))   
    }

    return (
        <>
        <Body>
        <Navbar color='black'/>
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
        <Rodape>
            <div>
            <div>
            <p>Desconto: R$ </p> <h3>0.00</h3>
            </div>
            <div>
            <p>Total R$ </p><h2>  {total}</h2>
            </div>
            </div>
            <button onClick={finalizarCompra}> COMPRAR </button>
        </Rodape>
        </Corpo>
        
        </Body>
        </>
    )
}

const Rodape = styled.div`
        width: 100%;
        height: 7vh;
        padding: 0 10vw;
        position: fixed;
        bottom: 0px;
        background-color: #e9ecef;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
       div div{
            display: flex;
            height: 3vh;
            align-items: center;
            justify-items: center;
            p{
                font-size: 3vw;
                font-weight: 300;
                color: #343a40;
            }
            h2{
            font-size: 3vw;
            margin: 2vh 1vw;
            color: #343a40;
            }
            h3{
            font-size: 3vw;
            margin: 2vh 1vw;
            font-weight: 600;
            color: #343a40;
            }
        }
        button{
            margin-left: 2vw;
            width: 22vw;
            height: 4vh;
            background-color: #343a40;
            color: #FFFFFF;
            border-radius: 1vw;
            font-size: 3vw;
            font-weight: 900;
        }

`

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

const Container = styled.div`
    margin-bottom: 10px;
    margin-left: 5vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: #627272 solid 1px;
    width: 90%;
    height: auto;
    img{
        width: auto;
        height: 16vh;
    }
    div {
        height: 20vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }
    div h1{
        width: 50vw;
        font-size: 3vw;
        font-weight: 300;
        color: #727272;

    }
    div p{
        margin-top: 1vh;
        font-size: 3vw;
        color: #627272;
    }
    
`
const Corpo = styled.div`
    margin-top: 12vh;
    width: 100vw;
    height: auto;

`


