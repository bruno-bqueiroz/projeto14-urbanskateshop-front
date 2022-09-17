import styled from "styled-components" 

export default function RenderizarHome({
    produtos
}){
    console.log(produtos)
    return (
        <>
            {produtos.map((value, index) => 
                <Caixa1 key={index}>
                    <img src={value.url_image} alt = {value.description} />
                    <div>
                        <h1>{value.description}</h1>
                        <p>R$ {value.newValue/100}</p> 
                        <ion-icon name="cart"></ion-icon>              
                    </div>
                </Caixa1>
            )} 
        </>
    )
}

const Caixa1 = styled.div`
width: 100%;
height: 100%;
background-color: blue;
display: grid;
justify-items: center;
position: relative;

div {
    display: flex;
    align-items: center;
    flex-direction: column;
    ion-icon{
    width: 4vw;
    height: 4vw;   
    }
    h1{
    font-size: 3vw;
    font-weight: 400;
    background-color: red;
}
}


p {
    font-size: 3vw;
    text-align: center;
    font-family: "Raleway";
}

img{
    width: 80%;
    height: auto;
}
`