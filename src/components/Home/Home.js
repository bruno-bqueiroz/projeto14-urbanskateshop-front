import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

import { getAllProducts } from "../../database/dataService";
import { Body, Container } from "./StyledHome";
import RenderProducts from "./RenderProducts";
import Navbar from "../shared/NavBar";
import CarouselHome from "./Carousel";

export default function Home() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Body>
      <Navbar />
      <CarouselHome setProducts={setProducts}/>
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