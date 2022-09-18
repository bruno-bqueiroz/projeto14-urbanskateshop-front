import axios from "axios";

const URL = "http://localhost:5000"

const postSignIn = async (user)=>{
    return await axios.post( URL+"/signIn", user)
}

const postSignUp = async (user)=>{
    return await axios.post(URL + "/signUp", user)
}

export {
    postSignIn,
    postSignUp
}