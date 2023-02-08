import React from "react";
import Placemage from "./Placemage";

export default function Place({ place, imageSize }) {
  return (
    <div>
      <Placemage place={place} imageSize={imageSize} />
      <p>
        <b>
          {place.name}
          {":" + place.description}
        </b>
      </p>
    </div>
  );
}
