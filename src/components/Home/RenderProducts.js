import styled from "styled-components" 
import { useNavigate } from "react-router-dom"
import { useContext } from "react";

import UserContext from "../shared/context/UserContext";

export default function RenderizarHome({
    product
}){
    const navigate = useNavigate();
    const {carouselInterval} = useContext(UserContext);
    console.log(carouselInterval)

    function clearintervalAndEnterProduct(valueId){
        clearInterval(carouselInterval)
        navigate(`/${valueId}`)
    }

    return (
        <>
            {product.map((value, index) => 
                <Caixa1 key={index} onClick={()=>clearintervalAndEnterProduct(value._id)}>
                    <img src={value.url_image} alt = {value.title} />
                    <div>
                        <h1>{value.title}</h1>
                        <p>R$ {(value.newValue/100).toFixed(2)}</p>            
                    </div>
                </Caixa1>
            )} 
        </>
    )
}

const Caixa1 = styled.div`
    max-width: 250px;
    max-height: 100%;
    display: grid;
    justify-items: center;
    position: relative;

    div {
        display: flex;
        align-items: center;
        flex-direction: column;
        ion-icon{
            width: 24px;
            height: 24px; 
        }
        h1{
            font-size: 24px;
            font-weight: 400;
            text-align: center;
        }
    }


    p {
        font-size: 24px;
        line-height: 30px;
        text-align: center;
        font-family: "Raleway";
        display: flex;
        align-items: center;
    }

    img{
        width: 80%;
        height: auto;
    }

    a{
        text-decoration: none;
        color: black;
        text-align: center;
    }
`