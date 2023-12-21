import { CarouselItem } from "./CarouselItem";
import { useState } from "react";
import example1 from "./Media/example1.svg";
import example2 from "./Media/example2.svg";
import example3 from "./Media/example3.svg";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Baseball",
      description:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
      icon: example1,
    },
    {
      title: "Walking",
      description:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
      icon: example2,
    },
    {
      title: "Weights",
      description:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
      icon: example3,
    },
  ];
  const updateIndex = (newIndex: any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%) ` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          onClick={() => {
            activeIndex == 0
              ? updateIndex(activeIndex + 2)
              : updateIndex(activeIndex - 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="indicator-buttons"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            activeIndex == 2 ? updateIndex(0) : updateIndex(activeIndex + 1);
          }}
          className="button-arrow"
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
