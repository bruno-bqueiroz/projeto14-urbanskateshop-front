import styled from "styled-components";
import logotipo from '../images/jan-kopriva-oK2OoXCpOB4-unsplash.jpg'
import { Navigate, useNavigate } from "react-router-dom";
export default function Home (){
    const navigate = useNavigate();



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
        <img src={logotipo}/>
    </Background>

    <Container>
        <h1>Ofertas</h1>
        <ul>
            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>
            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>

            <div>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-tenis-nike-air-jordan-1-mid--p-1615292373886.jpg" alt=""/>
                <h1>Nike Air Jordan 1</h1>
                <p>R$ 2892,00</p>
            </div>
        </ul>
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
`

const Header = styled.div`
    width: 100%;
    height: 12vh;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;

    position: fixed;
    top: 0;

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
    width: 100%;
    height: auto;
    display: grid;
    justify-content: center;
    margin-bottom: 10vw;
h1 {
    font-family: 'wallBomber';
    font-size: 10vw;
    text-align: center;
}

ul {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
}

ul > div {
    background-color: red;
    width: 25vw;
    height: 25vw;
    margin-bottom: 50px;
}

div h1{
    font-size: 3vw;
}

div p {
    font-size: 3vw;
    text-align: center;
    font-family: "Raleway";
}

ul div img{
    width: 100%;
    height: 100%;
}
`
