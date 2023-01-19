import Carousel from "react-bootstrap/Carousel";
import CanonCamera from "./CanonCamera";
import ProgressBar from "react-bootstrap/ProgressBar";
import SharButton from "./SharButton";

export default function CanonSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <CanonCamera />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="slider">
          <div className="slider-left">
            <h1
              className="canon
                "
            >
              Canon camera
            </h1>
            <SharButton />

            <div className="bara">
              <ProgressBar>
                <ProgressBar animated now={70} />
              </ProgressBar>
            </div>
          </div>
          <img className="canonimg " src="81.png" alt="" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slider">
          <div className="slider-left">
            <h1
              className="canon
                "
            >
              Canon camera
            </h1>
            <SharButton />

            <div className="bara">
              <ProgressBar>
                <ProgressBar animated now={95} />
              </ProgressBar>
            </div>
          </div>
          <img className="canonimg " src="81.png" alt="" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
