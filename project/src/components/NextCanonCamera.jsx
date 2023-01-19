import Carousel from "react-bootstrap/Carousel";

import ProgressBar from "react-bootstrap/ProgressBar";

export default function NextCanonCamera() {
  return (
    <div className="slider">
      <div className="slider-left">
        <h1
          className="canon
                "
        >
          Canon camera
        </h1>

        <div className="bara">
          <ProgressBar>
            <ProgressBar animated now={45} />
          </ProgressBar>
        </div>
      </div>
      <img className="canonimg " src="81.png" alt="" />
    </div>
  );
}
