import React from "react";
import { getImageUrl } from "../image/utils";
import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

export default function Placemage({ place }) {
  const [isLarge, setIsLarge, imageSize] = useContext(ImageContext);
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
