import React from "react";
import "./ProductDetail.css";
const ProductDetail = (props) => {
  console.log(props.product);
  const { Picture, ProductTitle, SalePrice } = props.product;
  return (
    <div className="first-seller">
      <div className="product-item">
        <img src={Picture} alt="" />
        <h4>{ProductTitle}</h4>
        <p className="sale-price">{SalePrice}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
