import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { TailSpin, ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";

import { getSingleProduct, getCart } from "../../database/dataService.js";
import UserContext from "../shared/context/UserContext.js";
import Navbar from "../shared/NavBar.jsx";

export default function PaginaDoproduct() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { userData, localToken } = useContext(UserContext);
    const [token] = useState(userData.token || localToken);

    useEffect(() => {
        getSingleProduct(productId)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((erro) => {
                console.error(erro);
            });
    }, []);

    function adicionarAoCarrinho() {
        if (!token) {
            navigate("/signIn");
            return;
        }

        getCart(productId, token)
            .then((res) => {
                alert("Produto adicionado ao carrinho");
            })
            .catch((error) => {
                console.error(error);
                navigate("/signIn");
            });
    }

    return (
        <Body>
            <Navbar color="black" />
            {!Object.keys(product).length ? (
                <div className="spinner">
                    <ThreeCircles
                        height="100"
                        width={100}
                        color="#6EA8DD"
                        radius={2}
                        wrapperClass="spinner"
                        wrapperStyle={{ height: "80vh" }}
                    />
                </div>
            ) : (
                <Corpo>
                    <img src={product.url_image} alt={product.description} />
                    <Descricao>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <div>
                            <h2>R$ {(product.newValue / 100).toFixed(2)}</h2>{" "}
                            <button onClick={adicionarAoCarrinho}> ADD TO CART </button>
                        </div>
                    </Descricao>
                </Corpo>
            )}
        </Body>
    );
}

const Body = styled.div`
  width: 100vw;
  height: auto;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Urbanist", sans-serif;
  font-size: 8vw;
  font-weight: 700;
`;

const Corpo = styled.div`
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  img {
    border-radius: 2vw;
    max-width: 65vw;
    height: auto;
    max-height: 55vh;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    padding-left: 10vw;
    margin-top: 35vh;
    img {
      max-width: 45vw;
      height: auto;
      max-height: 55vh;
    }
  }
`;

const Descricao = styled.div`
  width: 100vw;
  padding-left: 5vw;
  div {
    width: 100%;
    height: 10vw;
    position: fixed;
    bottom: 3vh;
    background-color: #ffffff;
    z-index: 1;
    display: flex;
    align-items: center;
    h2 {
      font-size: 5vw;
      margin: 2vh 0;
      color: #333430;
    }
    button {
      margin-left: 2vw;
      width: 22vw;
      height: 4vh;
      background-color: #333430;
      color: #ffffff;
      border-radius: 1vw;
      font-size: 3vw;
      font-weight: 900;
    }
  }
  h1 {
    font-size: 10vw;
    margin: 3vh 0;
    color: #333430;
  }
  p {
    font-size: 4vw;
    font-weight: 400;
    margin: 2vh 0;
    color: #727272;
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 3vw;
    }
    p {
      font-size: 2vw;
    }
    div {
      margin-top: 10vh;
      width: 37vw;
      flex-direction: column;
      justify-items: center;
      position: inherit;
      bottom: auto;
      h2 {
        font-size: 3vw;
        font-weight: 800;
      }
      button {
        margin-left: 0;
        width: 14vw;
        font-size: 2vh;
        font-weight: 900;
        border-radius: 10px;
      }
    }
  }
`;
