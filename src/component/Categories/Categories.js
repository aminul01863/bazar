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
      <div class="container ">
        <p className="fs-3 fw-bold ">Categories</p>
        <div class="row row-cols-2 row-cols-lg-5 g-3 g-lg-4">
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              <img src={Fashion} alt="" />
              Fashion
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              <img src={Care} alt="" />
              Car
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              <img src={Mobile} alt="" />
              Mobile
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              <img src={Laptop} alt="" /> Laptop
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              <img src={Desktop} alt="" /> Desktop
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              <img src={Tablet} alt="" /> Tablet
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              {" "}
              <img src={Fashion} alt="" /> Fashion
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              {" "}
              <img src={Furniture} alt="" /> Furniture
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              {" "}
              <img src={Camera} alt="" /> Camera
            </div>
          </div>
          <div class="col">
            <div class="p-3 border-0 rounded bg-light">
              <img src={Electronics} alt="" /> Electronics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
