import axios from "axios";

const URL = "https://projeto14-urbansk8shop-back.herokuapp.com"

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