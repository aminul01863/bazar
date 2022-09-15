import React from "react";
import vector from "../../image/Vector.png";
import vector1 from "../../image/Vector (1).png";
import vector2 from "../../image/Vector (4).png";
import vector3 from "../../image/Vector (3).png";
const Review = () => {
  return (
    <div>
      <div class="container mt-5">
        <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          <div class="col">
            <div class="p-3 justify-content-around bg-light">
              <div className="d-flex justify-content-center align-item-center">
                <img src={vector} alt="" />
              </div>
              <div className="text-center mt-4 mb-0">
                <h6>Worldwide Delivery</h6>
                <span>
                  We offer competitive prices on our 100 million plus product
                  any range.
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3  bg-light">
              <div className="d-flex justify-content-center align-item-center">
                <img src={vector1} alt="" />
              </div>
              <div className="text-center mt-4 mb-0">
                <h6>Safe Payment</h6>
                <span>
                  We offer competitive prices on our 100 million plus product
                  any range.
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3  bg-light">
              <div className=" d-flex justify-content-center align-item-center">
                <img src={vector2} alt="" />
              </div>
              <div className="text-center mt-4 mb-0">
                <h6>Shop With Confidence</h6>
                <span>
                  We offer competitive prices on our 100 million plus product
                  any range.
                </span>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3  bg-light">
              <div className="d-flex justify-content-center align-item-center">
                <img src={vector3} alt="" />
              </div>
              <div className="text-center mt-4 mb-0">
                <h6>24/7 Support</h6>
                <span>
                  We offer competitive prices on our 100 million plus product
                  any range.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
