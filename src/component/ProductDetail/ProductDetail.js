import { faHeart, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductDetail.css";
const ProductDetail = (props) => {
  console.log(props.product);
  const { Picture, ProductTitle, SalePrice, RegularPrice } = props.product;
  return (
    <div className=" shadow-sm w-75 h-75  p-3 my-4 mx-2">
      {/* Discount */}
      <div className="d-flex p-2 justify-content-between align-items-center w-100">
        <span className="m-0 rounded bg-danger fs-6 p-1 text-light ">
          25% off
        </span>
        <FontAwesomeIcon className="text-danger fs-5" icon={faHeart} />
      </div>
      {/* Product image */}
      <div className="d-flex justify-content-center">
        <img
          className="w-75 d-flex  justify-content-center align-items-center"
          src={Picture}
          alt=""
        />
      </div>

      {/* product details */}
      <div className="mt-3 w-100">
        <h5 className="fw-bold">{ProductTitle}</h5>
        <div className="star-icon-container">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="d-flex justify-content-between align-items-center mt-1 ">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <span>${SalePrice}</span>
            <span className="text-decoration-line-through">
              ${RegularPrice}
            </span>
          </div>
          <button className="plus-btn ">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
