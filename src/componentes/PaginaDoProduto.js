import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "./context/UserContext.js";
import Navbar from "./shared/NavBar.jsx";


export default function PaginaDoproduct(){
    const navigate = useNavigate();
    const {productId} = useParams();
    const [product, setProduct] = useState([]);
    const { userData, localToken } = useContext(UserContext);
    const [token] = useState(userData.token || localToken)
    
    const config = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    }

    useEffect (()=>{
        axios.get(`https://projeto14-urbansk8shop-back.herokuapp.com/products/${productId}`).then(res =>{
            setProduct(res.data);
        }).catch(erro=>{
            console.error(erro)
         })
    },[])

    function adicionarAoCarrinho(){
        if(!token){
            navigate('/signIn')
            return
        }

        axios.post ('https://projeto14-urbansk8shop-back.herokuapp.com/cart', {
            productId: product._id
        }, config).then(res =>{
            alert(
                "Produto adicionado ao carrinho"
            )
        }).catch(error => console.error(error))
    }

    if (product){
    return (
        <>
        <Body>
            <Navbar color='black'/>
            <Corpo>
                <img src={product.url_image} alt ={product.description} />
                <Descricao >
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <div>
                    <h2>R$ {(product.newValue/100).toFixed(2)}</h2> <button onClick={adicionarAoCarrinho}> ADD TO CART </button>            
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
    font-family: 'Urbanist', sans-serif;
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