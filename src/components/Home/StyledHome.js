import styled from "styled-components";

const Body = styled.div`
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Urbanist', sans-serif;
    font-size: 30px;
    font-weight: 700;
    background: #fff;
    color: #222529;

    .carousel::-webkit-scrollbar {
     display: none;
 }

    .manual-navigation{
       height: 100%;
       width: 100%;
       
       display: flex;
       justify-content: center;
   }

   .manual-btn{
        border:2px solid black;
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
        transition: 1s;
    }
`

const Container = styled.div`
    width: 100%;
    height: auto;
    display: inline-grid;
    margin: 20px auto 10vh auto;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 20px;
     background: #fff;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

export {
    Body,
    Container
}