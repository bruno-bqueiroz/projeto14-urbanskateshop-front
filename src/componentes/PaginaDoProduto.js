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
        axios.get('https://projeto14-urbansk8shop-back.herokuapp.com/products').then(res =>{
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
                <div >
                    <h1>{produto.description}</h1>
                    <p>R$ {produto.newValue/100}</p>            
                </div>
                <div>
                    <button onClick={irParaHome}> Pagina inicial </button>  
                    <button > Comprar </button>
                    <button onClick={adicionarAoCarrinho}> Adicionar ao carrinho </button> 
                </div>
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
    margin-top: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    img{
        max-width: 80vw;
        height: auto;
        max-height: 60vh;
    }
    div h1{
        font-size: 10vw;
    }
    
`