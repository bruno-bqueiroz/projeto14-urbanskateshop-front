import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function Login (){
    const { token, setToken } = useContext(UserContext);

    const tokenfixo = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzI0ZGIyZjQ1ZWY4NzljNDQwN2M3MWMiLCJpYXQiOjE2NjM0MTg4OTR9.ROAr9w1CAE5RudvGOFEXQySC7j37G2qO7J_rouf48us';
    setToken(tokenfixo);

    console.log(token)
    
    return (
        <>
        <h1>Rota de Login</h1>
        </>
    )
}