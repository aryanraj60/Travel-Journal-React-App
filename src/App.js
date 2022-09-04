import React from "react";
import Navbar from "./Components/Navbar";
import Data from "./data";
import Card from "./Components/Card";

const Cards = Data.map((item) => {
  return <Card item={item} />;
});
console.log(Cards);
export default function App() {
  return (
    <div className="main-container">
      <Navbar />
      {Cards}
    </div>
  );
}
