import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h2>Bazar</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </div>
          <div className="col">
            <h6>About Us</h6>
            <div className="customer">
              <a href="#home">Careers</a>
              <br />
              <a href="#home">Our Stores</a>
              <br />
              <a href="#home">Track Your Order</a>
              <br />
              <a href="#home">Our Cares</a>
              <br />
              <a href="#home">Terms & Conditions</a>
              <br />
              <a href="#home">Terms & Conditions</a>
            </div>
          </div>
          <div className="col ">
            <h6>Customer Care</h6>
            <div className="customer">
              <a href="#home">Help Center</a>
              <br />
              <a href="#home">How to Buy</a>
              <br />
              <a href="#home">Track Your Order</a>
              <br />
              <a href="#home">Corporate & Bulk Purchasing</a>
              <br />
              <a href="#home">Returns & Refunds</a>
              <br />
            </div>
          </div>
          <div className="col">
            <h6>Contact Us</h6>
            <div>
              <p>
                70 Washington Square South, New York, NY 10012, United States
              </p>
              <p>
                Email: aminulis804@gmail.com <br />
                Phone: 017254754
              </p>
              <div className="gap-4 customer">
                <a href="https://www.google.com/">Google</a>
                <a href="https://www.google.com/">Facebook</a>
                <a href="https://www.google.com/">You-Tube</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
