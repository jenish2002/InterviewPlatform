import React from "react";
import profileImage from "./profileImage.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="d-flex bg-white border-end border-2 flex-column flex-shrink-0"
      style={{ width: "4.3rem" }}
    >
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li className="nav-item">
          <div className="d-block p-2 border-bottom rounded-0">
            <img className="img-fluid" src={profileImage} alt="" />
            <div className="h5 mt-2 pt-2 cm-strong">IP</div>
          </div>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Home"
          >
            <i className="fa fa-home" aria-hidden="true" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/codeIDE"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Code IDE"
          >
            <i className="fas fa-code" />
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/WhiteBoard"
            className="nav-link py-3 border-bottom rounded-0"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="White Board"
          >
            <i className="fa-solid fa-clipboard" />
          </Link>
        </li>
      </ul>
      <div className="border-top">
        <Link
          to=""
          className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Toogle Mode"
          aria-expanded="false"
        >
          <i className="fa-solid fa-moon"></i>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
