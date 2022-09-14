import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import MegaMenu from "./MegaMenu";

const Header = () => {
  return (
    <nav className="navbar bg-tansparent">
      <div className="container">
        <a className="navbar-brand fw-bold fs-2" href="#home">
          Bazar
        </a>
        <div className="d-flex align-items-center gap-4">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex align-items-center gap-4">
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
      </div>
      <div className="my-2 container">
        <MegaMenu />
      </div>
    </nav>
  );
};

export default Header;
