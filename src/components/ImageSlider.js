import React, { useState } from "react";
import { DataSlider } from "./DataSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <IoIosArrowBack className="arrow-left" onClick={prevSlide} />
      <IoIosArrowForward className="arrow-right" onClick={nextSlide} />
      {DataSlider.map((slide, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img src={slide.image} alt="Ferrari image" className="image" />
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
