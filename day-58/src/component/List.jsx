import React from "react";
import { places } from "../data/Data";
import Place from "./Place";

export default function List({ imageSize }) {
  const Items = places.map((place, index) => {
    return <Place key={index} imageSize={imageSize} place={place} />;
  });
  return <div>{Items} </div>;
}
