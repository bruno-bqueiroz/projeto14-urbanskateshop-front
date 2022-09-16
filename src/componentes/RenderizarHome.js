import styled from "styled-components" 

export default function RenderizarHome({
    produtos
}){
    
    return (
        <>
            {produtos.map((value, index) => 
                <Caixa1 key={index}>
                    <img src={value.url_image}/>
                    <h1>{value.description}</h1>
                    <div>
                        <p>{value.newValue/100}</p> 
                        <ion-icon name="cart"></ion-icon>              
                    </div>
                </Caixa1>
            )} 
        </>
    )
}

const Caixa1 = styled.div`
display: grid;
justify-items: center;
position: relative;
h1 {
    font-family: 'wallBomber';
    font-size: 10vw;
    text-align: center;
}

div {
    display: flex;
    align-items: center;
    ion-icon{
    width: 4vw;
    height: 4vw;   
    }
}
h1{
    font-size: 3vw;
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