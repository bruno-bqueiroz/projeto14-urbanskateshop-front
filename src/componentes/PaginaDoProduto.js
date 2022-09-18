import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function PaginaDoProduto(){
    const {ID} = useParams();
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

    /* const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    } */
    const config = {
        headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzI0ZGIyZjQ1ZWY4NzljNDQwN2M3MWMiLCJpYXQiOjE2NjM0MTg4OTR9.ROAr9w1CAE5RudvGOFEXQySC7j37G2qO7J_rouf48us`
        }
    }

    
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
        }, config).then(res => console.log(res)).catch(error => console.error(error))
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
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    img{
        width: 80vw;
        height: auto;
    }
    div h1{
        font-size: 10vw;
    }
    
`