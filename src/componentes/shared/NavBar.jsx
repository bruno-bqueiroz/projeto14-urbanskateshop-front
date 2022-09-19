import styled from "styled-components";
import {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../context/UserContext";


export default function Navbar({color}){
    const {userData, localUserName} = useContext(UserContext)
    const [bgColor, setBgColor] = useState(false)
    const [userName, setUserName] = useState(userData.name || localUserName)
    
    const navigate = useNavigate();
    
    const changeColor = ()=>{
        if (window.scrollY >= 300){
            setBgColor(true)
        }else {
            setBgColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return(
        <Header Bg={bgColor? 'rgb(0,0,0,0.8)' : 'rgb(0,0,0,0)'}
            color= {bgColor || !color? 'white': color}
        >
            <div className="logo">
                <h1 onClick={()=> navigate('/')}>URBAN</h1>
            </div>
                
            <div className="nav-menu">
                <ion-icon  name="cart" onClick={()=> navigate('/cart')}></ion-icon>
                {userName? <p onClick={()=>navigate('/checkout')}>{userName}</p>
                :
                <p onClick={()=>navigate('/signIn')}>Entrar / Cadastrar</p>}
            </div>
        </Header>
    )

}

const Header = styled.header`
    width: 100%;
    height: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 10px;
    color: ${props => props.color};
    background-color: ${props => props.Bg};
    transition: 500ms ease-in-out background-color,
                500ms ease-in-out box-shadow;

    position: fixed;
    top: 0;
    z-index: 3;

    div{
        height: 60px;
        display: flex;
        align-items: center;
    }

    div.logo{
        justify-content: flex-start;
        margin-left: 7vw;
    }

    div.nav-menu{
        justify-content: flex-end;
        margin-right: 2vw;
        gap:16px
    }

    h1{
        font-family: "urbanJungle";
        font-size: 46px;
        text-align: center;
        font-weight: 400;
        margin-top: 10px;
        cursor: pointer;
    }
    p{
        font-family: 'Roboto', sans-serif;
        font-size:20px;
        text-align: center;
        margin: 0;
        cursor: pointer;
    }
    ion-icon{
        width: 40px;
        height: 40px;
        margin-left: 20%;
        cursor: pointer;
    }

    @media (max-width: 500px) {
        h1{
            font-size: 30px;
        }
        p{
            font-size:16px;
            width: 50%;
        }
        ion-icon{
            width: 26px;
            height: 26px;
        }

        div.nav-menu{
        gap:0px;
        justify-content: flex-end;
        margin-right: 2vw;
    }
    }
`