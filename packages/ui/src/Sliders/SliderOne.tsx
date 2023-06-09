import React from "react";
import "./sliderOne.css";

interface slides {
  source: string;
  title: string;
}

const images = [
  {
    source:
      "https://images.pexels.com/photos/6447203/pexels-photo-6447203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Little Venice in Colmar",
  },
  {
    source:
      "https://images.pexels.com/photos/3283186/pexels-photo-3283186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Back View of a Man Standing on a Rock near the Waterfalls",
  },
  {
    source:
      "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Machu Pichu, Peru",
  },
  {
    source:
      "https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Train With Smoke",
  },
  {
    source:
      "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Hot air ballons in the sky",
  },
  {
    source:
      "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Canal Beside Houses",
  },
  {
    source:
      "https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title:
      "Brown Wooden House on Green Grass Field Near Green Trees and Mountains",
  },
];

interface SliderOneProps {
  title: string;
  slides?: slides[];
}

export const SliderOne = ({ title }: SliderOneProps) => {
  let slides = images;
  const [slideNumber, setSlideNumber] = React.useState(0);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const nextArrow = React.useRef<HTMLDivElement>(null);

  const navigationHandle = (direction: string) => {
    if (sliderRef.current) {
      let newSlideNumber;
      const totalNoofSlides = sliderRef.current.children.length - 1;
      direction === "left"
        ? (newSlideNumber =
            slideNumber === 0 ? totalNoofSlides : slideNumber - 1)
        : (newSlideNumber =
            slideNumber === totalNoofSlides ? 0 : slideNumber + 1);
      setSlideNumber(newSlideNumber);
      // adding/removing active class from slides
      Array.from(sliderRef.current.children).forEach((slide) =>
        slide.classList.remove("active")
      );
      sliderRef.current.children[newSlideNumber].classList.add("active");
    }
  };

  // autoplay

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextArrow?.current?.click();
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // checking if no slides available
  if (slides.length <= 0) {
    console.log("No slides available..");
    return <></>;
  }

  return (
    <div className="bodySlider">
      <div className="sliderWrapper">
        {title && <h3 className="sliderTitle">{title}</h3>}
        <button className="prevArrow" onClick={() => navigationHandle("left")}>
          «
        </button>
        <div className="slider" ref={sliderRef}>
          {slides.map((slide: slides, index: any) => (
            <div className={`slide${index === 0 ? " active" : ""}`}>
              {slide.source && (
                <img
                  src={slide.source}
                  alt={slide.title}
                  loading="lazy"
                  draggable={false}
                />
              )}
              {slide.title && <h3>{slide.title}</h3>}
            </div>
          ))}
        </div>
        <button
          className="nextArrow"
          onClick={() => navigationHandle("right")}
          ref={nextArrow}
        >
          »
        </button>
        <div className="sliderPagination">
          {slideNumber + 1} / {slides.length}
        </div>
      </div>
    </div>
  );
};
