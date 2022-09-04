import React from "react";
import locationImg from "../images/map.png";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card-img" />
      <p className="card-location-txt">{props.item.location}</p>
      <img className="location-img" src={locationImg} />
      <a className="card-googlemap" href={props.item.googleMapsUrl}>
        View on Google Maps
      </a>
      <h1 className="card-title">{props.item.title}</h1>
      <h3 className="card-travel-date">
        {props.item.startDate} - {props.item.endDate}
      </h3>
      <p className="card-about">{props.item.description}</p>
    </div>
  );
}
