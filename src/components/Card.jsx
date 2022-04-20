import React from "react";
import "./card.scss";

const Card = ({ data }) => {
  return (
    <div className="container-card">
      <div
        className="image"
        style={{ background: `url(${data.image})`, backgroundSize: "cover" }}
      ></div>
      <div className="content-card">
        <div className="detail">
          <h1>{data.produk}</h1>
          <p>{data.deskripsi}</p>
        </div>
        <div className="harga">
          <p>Rp: {data.harga}/Kg</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
