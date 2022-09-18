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
                    <Imagem>
                    <img src={value.url_image} alt = {value.title} />
                    </Imagem>
                    <Texto>
                        <h1>{value.title}</h1>
                        <p>R$ {(value.newValue/100).toFixed(2)}</p>            
                    </Texto>
                    </Link>
                </Caixa1>
            )} 
        </>
    )
}

const Caixa1 = styled.div`
display: flex;
align-items: center ;
justify-items: center;
position: relative;
width: 45vw;
height: 40vh;
position: relative;
`

const Imagem = styled.div`
    width: 100%;
    height: 32vh;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
    width: 80%;
    height: auto;
}
`

const Texto = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1{
        font-size: 5vw;
        font-weight: 400;
        color: #727272;
    }

    p {
    font-size: 5vw;
    line-height: 30px;
    font-family: "Raleway";
    display: flex;
    align-items: center;
    color: #727272;
    
}


`