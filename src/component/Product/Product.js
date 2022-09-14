import React, { useEffect, useState } from "react";
import "./Product.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import Slider from "react-slick";
import Cars from "../Cars/Cars";
import CarseName from "../Cars/CarseName";
const Product = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(
      "https://student-bazar.herokuapp.com/api/v1/public/product/home_page_product?page=1&limit=16"
    )
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);
  return (
    <div className="product-info">
      <p className="first-product-name ">Flash Deals</p>
      <Slider {...settings}>
        {product.map((product) => (
          <ProductDetail product={product}></ProductDetail>
        ))}
      </Slider>
      <div className="row mt-5">
        <div className="col-md-2">
          <CarseName></CarseName>
        </div>
        <div className="container col-md-10 ">
          {product.map((product) => (
            <Cars product={product}></Cars>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
