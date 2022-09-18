import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import {postSignUp}  from '../../database/dataService';


export default function SignUp(){
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [user, setUser] = useState({})

    const [err, setErr] = useState(false)
    const [conflict ,setConflict] = useState(false)
    const [server, setServer] = useState(false)
    const [firstStep, setFirstStep] = useState(false)
    async function handleForm (e){
        e.preventDefault()

        if(!firstStep){
            if(password !== confirmPass)return setErr(true)
            setFirstStep(true)
        }else{
            try {
                await postSignUp({
                    name,
                    email,
                    password,
                    address,
                    state,
                    country,
                })
                navigate('/signIn')
            } catch (error) {
                console.error(error)
                if(error.response?.status === 400) {setErr(true);}
                if(error.response?.status === 409) setConflict(true)
                if(error.response?.status === 500) setServer(true)
            }
        }
    }

    function FirstStep(){
        return(
            <Form onSubmit={handleForm}>
                <input id="name" name="name" 
                type="text" 
                placeholder="Nome"
                minLength="3"
                maxLength="15"
                required
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
                
                <input id="email" name="email" 
                type="email" 
                placeholder="E-mail" 
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>

                <input id='password' name="password" 
                type="password" 
                placeholder="Senha" 
                required
                className={err ? 'err':''}
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>

                <input id='confirmPassword' name="confirmPassword" 
                type="password" 
                placeholder="Confirme a senha" 
                required
                className={err ? 'err':''}
                value={confirmPass}
                onChange={(e)=> setConfirmPass(e.target.value)}
                />
                {conflict? <p>O email já foi cadastrado</p> : ''}
                {server? <p>O servidor esta fora de área</p> : ''}
                <button>Cadastrar endereço</button>
            </Form>
        )
    }

    function SecondStep(){
        return(
            <Form onSubmit={handleForm}>
                <input id="endereço" name="endereço" 
                    type="text" 
                    placeholder="Rua"
                    minLength="6"
                    required
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                />

                <input id="Estado" name="Estado" 
                    type="text" 
                    placeholder="Estado"
                    minLength="2"
                    maxLength="2"
                    required
                    value={state}
                    onChange={(e)=> setState(e.target.value)}
                />

                <input id="Pais" name="País" 
                    type="text" 
                    placeholder="País"
                    minLength="3"
                    maxLength="15"
                    required
                    value={country}
                    onChange={(e)=> setCountry(e.target.value)}
                />
                
                {conflict? <p>O email já foi cadastrado</p> : ''}
                {server? <p>O servidor esta fora de área</p> : ''}
                <button>Cadastrar conta</button>
            </Form>
        )
    }

    return(
        <Container className="sign-up" >
            <h1>URBAN</h1>
            {firstStep? 
            <>
                <Form onSubmit={handleForm}>
                    <input id="endereço" name="endereço" 
                        type="text" 
                        placeholder="Rua"
                        minLength="6"
                        required
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                    />

                    <input id="Estado" name="Estado" 
                        type="text" 
                        placeholder="Estado"
                        minLength="2"
                        maxLength="2"
                        required
                        value={state}
                        onChange={(e)=> setState(e.target.value)}
                    />

                    <input id="Pais" name="País" 
                        type="text" 
                        placeholder="País"
                        minLength="3"
                        maxLength="15"
                        required
                        value={country}
                        onChange={(e)=> setCountry(e.target.value)}
                    />
                    
                    {conflict? <p>O email já foi cadastrado</p> : ''}
                    {server? <p>O servidor esta fora de área</p> : ''}
                    <button>Cadastrar conta</button>
                </Form>
            </>: 
            <> 
                <Form onSubmit={handleForm}>
                    <input id="name" name="name" 
                    type="text" 
                    placeholder="Nome"
                    minLength="3"
                    maxLength="15"
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                    
                    <input id="email" name="email" 
                    type="email" 
                    placeholder="E-mail" 
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}/>

                    <input id='password' name="password" 
                    type="password" 
                    placeholder="Senha" 
                    required
                    className={err ? 'err':''}
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}/>

                    <input id='confirmPassword' name="confirmPassword" 
                    type="password" 
                    placeholder="Confirme a senha" 
                    required
                    className={err ? 'err':''}
                    value={confirmPass}
                    onChange={(e)=> setConfirmPass(e.target.value)}
                    />
                    {conflict? <p>O email já foi cadastrado</p> : ''}
                    {server? <p>O servidor esta fora de área</p> : ''}
                    <button>Cadastrar endereço</button>
                </Form>
            </>}
            <footer onClick={()=>navigate('/signIn')}>Já tem uma conta? Entre agora!</footer>
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