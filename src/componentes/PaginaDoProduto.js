import { useParams } from "react-router-dom";
import {useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./shared/NavBar.jsx";
import UserContext from "./context/UserContext.js";

export default function PaginaDoProduto(){
    const {ID} = useParams();
   const { userData } = useContext(UserContext);
    console.log(userData)
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }
    

    const [produtos, setProdutos] = useState([]);

    useEffect (()=>{
        axios.get('https://projeto14-urbansk8shop-back.herokuapp.com/products').then(res =>{
            setProdutos(res.data);
        }).catch(erro=>{
            console.log(erro)
         })
    },[])

    function adicionarAoCarrinho(){
        axios.post ('https://projeto14-urbansk8shop-back.herokuapp.com/cart', {
            productId: produto._id
        }, config).then(res =>{
            console.log(res)
            alert(
                "Produto adicionado ao carrinho"
            )
        }).catch(error => console.error(error))
    }
    const produto = produtos.find((value) => value._id === ID)

    if (produto){
    return (
        <>
        <Body>
            <Navbar color='black'/>
            <Corpo>
                <img src={produto.url_image} alt ={produto.description} />
                <Descricao >
                    <h1>{produto.title}</h1>
                    <p>{produto.description}</p>
                    <div>
                    <h2>R$ {produto.newValue/100}</h2> <button onClick={adicionarAoCarrinho}> ADD TO CART </button>            
                    </div>
                </Descricao>
            </Corpo>
        </Body>
        </>
    )
    }
    return(
        <>
        <Navbar color='black'/>
        <h1>Loading..</h1>
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

const Corpo = styled.div`
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    img{
        border-radius: 2vw;
        max-width: 65vw;
        height: auto;
        max-height: 55vh;
    }
`

const Descricao = styled.div`
    width: 100vw;
    padding-left: 5vw;
    div{
        width: 100%;
        height: 10vw;
        position: fixed;
        bottom: 3vh;
        background-color: #FFFFFF;
        z-index: 1;
        display: flex;
        align-items: center;
        h2{
        font-size: 5vw;
        margin: 2vh 0;
        }
        button{
            margin-left: 2vw;
            width: 22vw;
            height: 4vh;
            background-color: #333430;
            color: #FFFFFF;
            border-radius: 1vw;
            font-size: 3vw;
            font-weight: 900;
        }
    }
    h1{
        font-size: 10vw;
        margin: 3vh 0 ;
        color: #333430;
    }
    p{
        font-size: 4vw;
        font-weight: 400;
        margin: 2vh 0;
        color: #727272;
    }
    
`