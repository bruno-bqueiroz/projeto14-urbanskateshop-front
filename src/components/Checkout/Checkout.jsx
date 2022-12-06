import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

import UserContext from "../shared/context/UserContext";
import Navbar from "../shared/NavBar";

export default function Compra() {
  const navigate = useNavigate();
  const [checkout, setCheckout] = useState([]);
  const { userData, localToken } = useContext(UserContext);
  const [token, setToken] = useState(userData.token || localToken);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    axios
      .get("https://projeto14-urbansk8shop-back.herokuapp.com/checkout", config)
      .then((res) => {
        setCheckout(res.data);
      })
      .catch((error) => {
        console.error(error);
        if (error.response.status !== 404) navigate("/signIn");
      });
  }, []);

  function Box(value) {
    console.log(value.products);
    return (
      <div className="box">
        <p className="date">Data da compra: {value.paymentTime}</p>
        {value?.products.map((product, i) => {
          return (
            <div className="product">
              <img src={product.url_image} alt={product.description} />
              <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
              </div>
              <p>{"R$ " + (product.newValue / 100).toFixed(2)}</p>
            </div>
          );
        })}
        <p>Produto Enviado!</p>
        <p>Total da Compra R$ {(value.amount / 100).toFixed(2)}</p>
      </div>
    );
  }

  return (
    <div className="body">
      <Navbar color="black" />
      <div className="container">{checkout.map((value) => Box(value))}</div>
    </div>
  );
}
