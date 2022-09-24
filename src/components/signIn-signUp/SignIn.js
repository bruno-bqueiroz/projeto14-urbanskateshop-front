import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {postSignIn}  from '../../database/dataService';
import userContext from '../shared/context/UserContext';
import image1 from '../../images/mikael-kristenson-2YWymeP3cJM-unsplash.png'



export default function SignIn(){
    const navigate = useNavigate();
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const [unauthorized ,setUnAuthorized] = useState(false)
    const {setAuthorization} = useContext(userContext)
    const {setUserData} = useContext(userContext)

    async function handleForm (e){
        e.preventDefault()
        if(password.length<8) return setErr(true)

        try {
            const response = await postSignIn({
                email,
                password,
            })
            setUserData(response.data)
            setAuthorization(true)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userName', response.data.name)
            navigate(`/`)
        } catch (error) {
            console.error(error)
            localStorage.removeItem('token')
            localStorage.removeItem('userName')
            if(error.response?.status === 401) {setErr(true); setUnAuthorized(true);}
            if(error.response?.status === 400) setErr(true)
            if(error.response?.status === 404) setErr(true);alert(error.response?.data.message);
        }
    }

    return(
        <Container className="sign-in">
            <div className='title'><h1 onClick={()=> navigate('/')}>Urban</h1></div>
            <div className='form'>
                <Form onSubmit={handleForm}
                    inputColor = {err? "red" : "gray"}
                >
                    <input id="email" 
                    name="email" 
                    type="email" 
                    placeholder="E-mail" 
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)
                    }/>
                    
                    <input id='password' 
                    name="password" type="password"
                    placeholder="Senha" 
                    minLength='8'
                    required
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)
                    }
                    />
                    {unauthorized? <p>O email ou a senha está incorreto</p> : ''}
                    <button>Entrar</button>
                </Form>
                <footer onClick={()=>navigate('/signUp')}>Primeira vez? Cadastre-se!</footer>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${image1});
    background-size: cover;
    background-position: center;
    position: relative;
    padding: 7vh 30px;
    
    .title{
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title h1{
        font-family: "urbanJungle";
        font-size: 60px;
        margin: 20px;
        cursor: pointer;
        color: #fff;
        text-align: center;        
    }

    .form{
        background-color: white;
        box-shadow: 0px 0px 10px 1px black;
        padding: 30px 20px;
        border-radius: 10px;
        background-color: #f2f2f2;
        max-width: 800px;
        max-height: 400px;
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Urbanist', sans-serif;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

    input{
        height: 40px;
        border: 2px solid;
        border-radius: 5px;
        border-color: ${props=> props.inputColor};
        margin-bottom: 10px;
        font-size: 25px;
        padding:0 5px;
    }

    button{
        margin-top: 20px;
        height: 35px;
        margin-bottom: 60px;
        cursor:pointer;
        border: 1px solid #274965;
        border-radius: 10px;
        background-color: #95c5c6;
    }
`