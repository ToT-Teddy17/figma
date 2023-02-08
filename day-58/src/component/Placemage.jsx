import React from "react";
import { getImageUrl } from "../image/utils";

export default function Placemage({ place, imageSize }) {
  return (
    <div>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
      />
    </div>
  );
}
