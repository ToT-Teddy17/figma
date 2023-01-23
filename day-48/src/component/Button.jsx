import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Button() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      console.log("its playing");
    } else {
      console.log("pls u should play");
    }
  }, [isPlaying]);
  function handleClick() {
    console.log("clicked");
    setIsPlaying(!isPlaying);
  }
  return (
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}
