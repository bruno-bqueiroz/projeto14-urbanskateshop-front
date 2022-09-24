import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { TailSpin } from "react-loader-spinner";

import { getAllProducts, getSearchProduct } from "../../database/dataService";
import { Body, Container } from "./StyledHome";
import RenderProducts from "./RenderProducts";
import Navbar from "../shared/NavBar";

import Raphazito from "../../images/Raphazito.jpg";
import jan_korpriva from "../../images/jan-kopriva-oK2OoXCpOB4-unsplash.jpg";
import PH_flip from "../../images/ph_flip.png";

export default function Home() {
  const [product, setProducts] = useState([]);
  const carousel = useRef(null);
  const [img, setImg] = useState(1);
  let count = 1;

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    setInterval(() => {
      if (count < 3) {
        count++;
        handleClick(count);
      } else {
        count = 1;
        handleClick(count);
      }
    }, 5000);
  }, []);

  function handleClick(n) {
    if (n === 3) {
      carousel.current.scrollTo({
        left: carousel.current.offsetWidth * n - 1,
        behavior: "smooth",
      });
      setImg(n);
    }
    if (n === 2) {
      carousel.current.scrollTo({
        left: carousel.current.offsetWidth,
        behavior: "smooth",
      });
      setImg(n);
    }

    if (n === 1) {
      carousel.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
      setImg(1);
    }
  }

  function getProduct(text) {
    if(!text){
        getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    }else{
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
    <Body>
      <Navbar />
      <Carousel className="carousel" ref={carousel}>
        <div className="slide" onClick={()=>getProduct()}>
          <img src={PH_flip} className="slide first" alt="" />
        </div>
        <div className="slide" onClick={() => getProduct("tenis")}>
          <img src={jan_korpriva} className="slide" alt=""/>
          <h1>Tenis para todos os estilos e manobras.</h1>
        </div>
        <div className="slide" onClick={() => getProduct("shape")}>
          <img src={Raphazito} className="slide" alt="" />
          <h1>Escolha o seu shape para botar pressão nos games.</h1>
        </div>
      </Carousel>
      <h1>Ofertas</h1>
      {!product[0] ? (
        <div className="spinner">
          <TailSpin
            height="100"
            width={100}
            color="#6EA8DD"
            radius={2}
            wrapperClass="spinner"
            className="spinner"
          />
        </div>
      ) : (
        <Container>
          <RenderProducts product={product} />
        </Container>
      )}
    </Body>
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

  img {
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
    
  }
`;
