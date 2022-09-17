import styled from "styled-components";
import logotipo from '../images/jan-kopriva-oK2OoXCpOB4-unsplash.jpg'
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home (){
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
            <Background>
                <img src={logotipo} alt = "logotipo"/>
            </Background>
            <h1>Ofertas</h1>
            <Container>
                {!produtos ? <h1>Carregando Produtos...</h1>:
                produtos.map((value, index) => 
                    <Caixa1 key={index}  >
                        <Link to={`/${value._id}`}>
                        <img src={value.url_image} alt ={value.description} />
                        <div >
                            <h1>{value.description}</h1>
                            <p>R$ {value.newValue/100}</p>               
                        </div>
                        </Link>
                    </Caixa1>
                )}
                
            </Container>
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

const Background = styled.div`
    width: 100vw;
    height: auto;
    margin-top: 10vh;
    img{
        width: 100%;
        height: auto;
        background-image: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 70%,#ffffff 100%);
        background-size: cover;
        background-position: center;
    }
`

const Container = styled.div`
    width: 100vw;
    height: auto;
    display: grid;
    justify-content: center;
    margin-bottom: 10vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
const Caixa1 = styled.div`
width: 100%;
height: 100%;
display: grid;
justify-items: center;
position: relative;

div {
    display: flex;
    align-items: center;
    flex-direction: column;
    ion-icon{
    width: 4vw;
    height: 4vw;   
    }

    h1{
    font-size: 3vw;
    font-weight: 400;
}
}


p {
    font-size: 3vw;
    text-align: center;
    font-family: "Raleway";
}

img{
    width: 80%;
    height: auto;
}
`
