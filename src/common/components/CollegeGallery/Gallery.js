import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";
import first from "../../assets/first.jpg";
import second from "../../assets/second.jpg";
import third from "../../assets/third.jpg";
import { five, four, six } from "../../assets";

const Carousel = ({ items, activeIndex }) => {
  const [active, setActive] = useState(activeIndex);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      moveRight();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [active]);

  const generateItems = () => {
    const result = [];
    for (let i = active - 1; i <= active + 1; i++) {
      let index = i;
      if (i < 0) {
        index = items.length + i;
      } else if (i >= items.length) {
        index = i % items.length;
      }
      const level = active - i;
      result.push(<Item key={index} item={items[index]} level={level} />);
    }
    return result;
  };

  const moveLeft = () => {
    setActive((active - 1 + items.length) % items.length);
    setDirection("left");
  };

  const moveRight = () => {
    setActive((active + 1) % items.length);
    setDirection("right");
  };

  return (
    <div className="carousel-container noselect">
      <div className="carousel-arrow carousel-arrow-left" onClick={moveLeft}>
        <i className="fi-arrow-left">{"<"}</i>
      </div>
      <TransitionGroup className={`carousel-inner ${direction}`}>
        {generateItems()}
      </TransitionGroup>
      <div className="carousel-arrow carousel-arrow-right" onClick={moveRight}>
        <i className="fi-arrow-right">{">"}</i>
      </div>
    </div>
  );
};

const Item = ({ item, level }) => {
  const className = `carousel-item level${level}`;
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={1000}
      classNames={`fade slide ${level === 2 ? "dissolve" : ""}`}
    >
      <div className={className}>
        <img src={item} alt="carousel item" className="carousel-image" />
      </div>
    </CSSTransition>
  );
};

const items = [first, second, third, four, five, six];

const Gallery = () => (
  <div id="app">
    <Carousel items={items} activeIndex={0} />
  </div>
);

export default Gallery;
