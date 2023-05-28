import React from "react";
import "./coins.css";

const Coins = ({
  image,
  name,
  symbole,
  price,
  volume,
  pricechange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="currency_img" />
          <h1>{name}</h1>
          <p className="coin-symbole">{symbole}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}$</p>
          <p className="coin-volume">{volume.toLocaleString()}$</p>
          {pricechange > 0 ? (
            <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            MKT CAP : ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coins ;