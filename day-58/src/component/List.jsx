import React from "react";
import { places } from "../data/Data";
import Place from "./Place";

export default function List() {
  const Items = places.map((place, index) => {
    return <Place key={index} place={place} />;
  });
  return <div>{Items} </div>;
}
