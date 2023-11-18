import "./style.css";

import Image from "next/image";
export default function Carousel() {
  return (
    <div className="slider text-primary">
      <div className="slides">
        <div id="slide-1">
          <Image
            className="img-fluid"
            src="/poster-eg-1.png"
            height={400}
            width={400}
            alt="Poster Design 1"
          />
        </div>
        <div id="slide-2">
          <Image
            className="img-fluid"
            src="/poster-eg-2.png"
            height={400}
            width={400}
            alt="Poster Design 2"
          />
        </div>
        <div id="slide-3">3</div>
        <div id="slide-4">4</div>
        <div id="slide-5">5</div>
      </div>
    </div>
  );
}
