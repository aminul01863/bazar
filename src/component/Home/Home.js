import React from "react";

import shoes from "../../image/image 21.png";
import "./Home.css";
const Home = () => {
  return (
    <div className="container bg-white">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <h1 className="header-tex">50% Off For Your First Shopping</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            illum delectus tempora mollitia accusamus quam atque velit officia
            hic cum.
          </p>
          <button className="shop-btn">Shop now</button>
        </div>
        <div className="col-md-6">
          <img src={shoes} alt="" className="w-100"  />
        </div>
      </div>
    </div>
  );
};

export default Home;
