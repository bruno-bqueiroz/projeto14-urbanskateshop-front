import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "../contexts/UserContext.js";

export default function PaginaDoProduto(){
    const {ID} = useParams();
    console.log(ID)
    /* const { token } = useContext(UserContext); */
    const { token } = {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzI3NWNlY2U2MDVjNjlkOTZhNDFmMWUiLCJpYXQiOjE2NjM1MjQwODl9.boJwSJ_KxZFi3wod0sm_CoLNwdFXQA2-dFCjd0RDYh8"
      }
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
console.log(token)
    
    const navigate = useNavigate();

    const [produtos, setProdutos] = useState([]);

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
    function irParaCadastro(){
        navigate('/signUp')
    }
    function irParaCarrinho(){
        navigate('/cart')
    }
    function irParaHome(){
        navigate('/')
    }
    function adicionarAoCarrinho(){
        axios.post ('http://localhost:5000/cart', {
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
        <Header>
            <div>
                <p onClick={irParaLogin}> Entrar /</p> <p onClick={irParaCadastro}>Cadastrar</p>
            </div>
            <div>
            <h1 onClick={irParaHome}>URBAN</h1>
            </div>
            <div onClick={irParaCarrinho}>
                <ion-icon name="cart"></ion-icon>
            </div>
        </Header>
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