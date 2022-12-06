import styled from "styled-components";
import { useEffect, useRef, useContext } from "react";

import { getAllProducts, getSearchProduct } from "../../database/dataService";

import Raphazito from "../../images/Raphazito.jpg";
import jan_korpriva from "../../images/jan-kopriva-oK2OoXCpOB4-unsplash.jpg";
import PH_flip from "../../images/ph_flip.png";
import UserContext from "../shared/context/UserContext";

export default function CarouselHome({setProducts}) {
    const carousel = useRef(null);
    const {setCarouselInterval} = useContext(UserContext)
    let count = 1;

    const startInterval = ()=>{
        setInterval(() => {
            if (count < 3) {
                count++;
                handleClick(count);
            } else {
                count = 1;
                handleClick(count);
            }
        }, 7000);
    }

    useEffect(() => {
        clearInterval(startInterval);
        startInterval();
    });

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
                <button>Tenis para todos os estilos e manobras.</button>
            </div>
            <div className="slide" onClick={() => getProduct("shape")}>
                <img src={Raphazito} className="slide" alt="" />
                <button>Escolha o seu shape para botar pressão nos games.</button>
            </div>
        </Carousel>
    );
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

  button{
    color: black;
  }

  @media (max-width:800px) {
    .slide h1{
      font-size: 20px;
  }
  }
`;
