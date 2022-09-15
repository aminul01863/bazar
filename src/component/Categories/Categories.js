import React from "react";
import Fashion from "../../image/fashion.png";
import Care from "../../image/care.png";
import Mobile from "../../image/mobile.png";
import Laptop from "../../image/laptop.png";
import Desktop from "../../image/download-removebg-preview (25) 2.png";
import Tablet from "../../image/tablet.png";
import Electronics from "../../image/electronics.png";
import Furniture from "../../image/furnitur.png";
import Camera from "../../image/camera.png";
const Categories = () => {
  return (
    <div>
      <div class="container align-items-center justify-content-center">
        <p className="fs-3 fw-bold ">Categories</p>
        <div class="row my-5 ">
          <div class="col">
            <img src={Fashion} alt="" />
            Fashion
          </div>
          <div class="col">
            <img src={Care} alt="" />
            Car
          </div>
          <div class="col">
            <img src={Mobile} alt="" />
            Mobile
          </div>
          <div class="col">
            <img src={Laptop} alt="" /> Laptop
          </div>
          <div class="col">
            <img src={Desktop} alt="" /> Desktop
          </div>
        </div>
        <div class="row d-flex align-items-center">
          <div class="col">
            <img src={Tablet} alt="" /> Tablet
          </div>
          <div class="col">
            <img src={Fashion} alt="" /> Fashion
          </div>
          <div class="col">
            <img src={Electronics} alt="" /> Electronics
          </div>
          <div class="col">
            <img src={Furniture} alt="" /> Furniture
          </div>
          <div class="col">
            <img src={Camera} alt="" /> Camera
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
