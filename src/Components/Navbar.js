import React from "react";
import fill from "../images/fill.png";

export default function Navbar() {
  return (
    <nav>
      <p className="nav-text">my travel journal.</p>
      <img src={fill} className="fill-img" />
    </nav>
  );
}
