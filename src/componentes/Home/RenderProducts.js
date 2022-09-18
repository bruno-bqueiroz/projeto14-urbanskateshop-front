import { Link } from "react-router-dom"
import styled from "styled-components" 

export default function RenderizarHome({
    produtos
}){
    return (
        <>
            {produtos.map((value, index) => 
                <Caixa1 key={index}>
                    <Link to={`/${value._id}`}>
                    <img src={value.url_image} alt = {value.title} />
                    <div>
                        <h1>{value.title}</h1>
                        <p>R$ {(value.newValue/100).toFixed(2)}</p>            
                    </div>
                    </Link>
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
`