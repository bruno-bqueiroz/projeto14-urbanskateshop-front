/* 

function handleClick(n){
        console.log(img + ' ' + n)
        if(n === 3){
            carousel.current.scrollLeft += carousel.current.offsetWidth * 2
            setImg(n)
        }
        if(n === 2 && img>n){
            carousel.current.scrollLeft -= carousel.current.offsetWidth
            setImg(n)
        }

        if(n === 2 && img<n){
            carousel.current.scrollLeft += carousel.current.offsetWidth
            setImg(n)
        }

        if(n === 1 ){
            carousel.current.scrollLeft -= carousel.current.offsetWidth * 2
            setImg(1)
        }

    }
        <Carousel ref={carousel}>
                <div className="slide">
                    <img src={PH_flip} className='slide first' alt='' />
                </div>
                <div className="slide">
                    <img src={jan_korpriva} className='slide' alt=''/>
                </div>
                <div className="slide">
                    <img src={Raphazito} className='slide' alt=''/>
                </div>
                
            </Carousel>

            const Carousel = styled.div`
    width: 100vw;
    height: 60vh;
    margin-bottom: 20px;
    z-index: 0;
    position: relative;
    display: flex;
    flex:1;
    overflow-x: scroll;
    position: relative;
    transition: 1s;

    img{
        width: 100vw;
        height: 60vh;
        mask-image: linear-gradient(0deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 20%,#ffffff 40%);
        object-fit: cover;
        object-position: center;
        box-sizing: border-box;
        transition: 1s;
    }

    .manual-navigation{
       
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

    .manual-btn:not(:last-child){
        margin-right: 40px;
    }

    .manual-btn:hover{
        background-color: black;
    }

    .manual-btn:active{
        background-color: black;
    }


    @media (max-width: 800px) {
    background-image: linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(0, 0, 0, 0.5) 70%,#ffffff 100%),
    url(${PH_flip});
} 
` 

*/


/* 
import styled from "styled-components";
import { useEffect, createRef, Component } from "react";

import { getAllProducts, getSearchProduct } from "../../database/dataService";

import Raphazito from "../../images/Raphazito.jpg";
import jan_korpriva from "../../images/jan-kopriva-oK2OoXCpOB4-unsplash.jpg";
import PH_flip from "../../images/ph_flip.png";

export class CarouselHome extends Component {
    constructor({ setProducts }) {
        const carousel = createRef();
        let count = 1;

        const startInterval = () => {
            this.count = setInterval(() => {
                if (count < 3) {
                    count++;
                    handleClick(count);
                } else {
                    count = 1;
                    handleClick(count);
                }
            }, 7000);
        };

        

        function handleClick(n) {
            if (n > 2) {
                carousel.current.scrollTo({
                    left: carousel.current.offsetWidth * n - 1,
                    behavior: "smooth",
                });
            }
            if (n === 2) {
                carousel.current.scrollTo({
                    left: carousel.current.offsetWidth,
                    behavior: "smooth",
                });
            }

            if (n === 1) {
                carousel.current.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            }
        }

        function getProduct(text) {
            if (!text) {
                getAllProducts()
                    .then((res) => {
                        setProducts(res.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {
                getSearchProduct(text)
                    .then((res) => {
                        setProducts(res.data);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }

        return (
        <Carousel className="carousel" ref={carousel}>
           <div className="slide" onClick={() => getProduct()}>
                <img src={PH_flip} className="slide first" alt="" />
            </div>
            <div className="slide" onClick={() => getProduct("tenis")}>
                <img src={jan_korpriva} className="slide" alt="" />
                <h1>Tenis para todos os estilos e manobras.</h1>
            </div>
            <div className="slide" onClick={() => getProduct("shape")}>
                <img src={Raphazito} className="slide" alt="" />
                <h1>Escolha o seu shape para botar pressão nos games.</h1>
            </div>
        </Carousel>
        );
    }
}

const Carousel = styled.div`
  width: 100vw;
  height: 60vh;
  margin-bottom: 20px;
  z-index: 0;
  display: flex;
  overflow-x: scroll;
  cursor: pointer;

  .slide img {
    width: 100vw;
    height: 60vh;
    display: block;
    mask-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 20%,
      #ffffff 40%
    );
    object-fit: cover;
    object-position: center;
    box-sizing: border-box;
    transition: 1s;
  }

  .slide{
    position: relative;
    display: flex;
    justify-content: center;
  }

  .slide h1{
    position: absolute;
    bottom: 80px;
    font-size: 30px;
  }

  @media (max-width:800px) {
    .slide h1{
      font-size: 20px;
  }
  }
`;

*/