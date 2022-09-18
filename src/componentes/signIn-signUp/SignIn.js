import { useState, useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


import {postSignIn}  from '../../database/dataService';
import userContext from '../context/UserContext';



export default function SignIn(){
    const navigate = useNavigate();
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const [unauthorized ,setUnAuthorized] = useState(false)
    /* const {setAuthorization} = useContext(userContext)
    const {setUserData} = useContext(userContext) */

   async function handleForm (e){
        e.preventDefault()
        if(password.length<8) return setErr(true)

        try {
            const response = await postSignIn({
                email,
                password,
            })
            /* setUserData(response.data)
            setAuthorization(true) */
            localStorage.setItem('token', response.data.token)
            navigate(`/`)
        } catch (error) {
            console.error(error)
            if(error.response?.status === 401) {setErr(true); setUnAuthorized(true);}
            if(error.response?.status === 400) setErr(true)
            if(error.response?.status === 404) alert(error.response?.data.message)
        }
    }

    return(
        <Container className="sign-in">
            <h1>Urban</h1>
            <Form onSubmit={handleForm}
                inputColor = ""
            >
                <input id="email" 
                name="email" 
                type="email" 
                placeholder="E-mail" 
                className={err ? 'err':''}
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)
                }/>
                
                <input id='password' 
                name="password" type="password"
                placeholder="Senha" 
                className={err ? 'err':''}
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
        </Container>
    )
}

const Container = styled.div`
    max-width: 800px;
    height: 100vh;
    max-height: 400px;
    max-width: 600px;
    margin: 15vh auto;
    padding: 0 20px;
    text-align: center;
    font-family: 'Urbanist', sans-serif;

    h1{
        font-family: "urbanJungle";
        font-size: 60px;
        margin-bottom: 20px;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

    input{
        height: 40px;
        border-color: ${props=> props.inputColor};
        margin-bottom: 10px;
        font-size: 25px;
    }

    button{
        margin-top: 20px;
        height: 35px;
        margin-bottom: 60px;
    }
`