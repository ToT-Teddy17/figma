import React from "react";
import Placemage from "./Placemage";

export default function Place({ place }) {
  return (
    <div>
      <Placemage place={place} />
      <p>
        <b>
          {place.name}
          {":" + place.description}
        </b>
      </p>
    </div>
  );
}
