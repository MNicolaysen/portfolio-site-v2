import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import { useSwipeable } from "react-swipeable";

export default function Carrousel(props) {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setActiveIndex(index) };
  });

  const [activeIndex, setActiveIndex] = useState(0)
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const handlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prevSlide) => prevSlide + 1),
    onSwipedRight: () => setActiveIndex((prevSlide) => prevSlide - 1),
  });

  const containerStyles = {
    width: "100vw",
    height: "80vh",
    overflow: "hidden",
    position: "relative",
  };

  return (
    <div
      {...handlers}
      style={containerStyles}
    >
      <Carousel
        slides={cards}
        goToSlide={activeIndex}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
