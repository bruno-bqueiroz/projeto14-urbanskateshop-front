import axios from "axios";

const URL = "https://urban-api-5gcj.onrender.com"

const postSignIn = async (user)=>{
    return await axios.post( URL + "/signIn", user)
}

const postSignUp = async (user)=>{
    return await axios.post(URL + "/signUp", user)
}

const getAllProducts = async ()=>{
    return await axios.get(URL + '/products')
}

const getSingleProduct = async (productId) =>{
    return await axios.get(URL + `/products/${productId}`)
}

const getCart = async (productId, token)=>{
    return await axios.post (URL + '/cart', {
        productId: productId
    }, {headers: {
        Authorization: `Bearer ${token}`
    }})
}

const getSearchProduct = async (text)=>{
    return await axios.get(URL + `/products/search/${text}`)
}

export {
    postSignIn,
    postSignUp,
    getAllProducts,
    getSingleProduct,
    getCart,
    getSearchProduct
}