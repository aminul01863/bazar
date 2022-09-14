import {
  faHardHat,
  faHeart,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ProductDetail.css";
const ProductDetail = (props) => {
  console.log(props.product);
  const { Picture, ProductTitle, SalePrice, RegularPrice } = props.product;
  return (
    <div className="product-container">
      <div className="product-item">
        <div className="hard-container">
          <div>
            <p>25% off</p>
          </div>
          <div className="mx-auto">
            <FontAwesomeIcon icon={faHeart} />
          </div>
        </div>
        <div className="product-img">
          <img src={Picture} alt="" />
        </div>
        <div className="mt-3">
          <p>{ProductTitle}</p>
          <div className="star-icon-container ">
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="price-container mt-1 ">
            <div>
              <p className="seal-price">$ {SalePrice}</p>
            </div>
            <div className="mx-3">
              <p>$ {RegularPrice}</p>
            </div>
            <div>
              <button className="plus-btn ">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
