import Styles from "./Card.module.css";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card({
  imageSrc,
  title,
  description,
  dateCreated,
  framework,
  alt,
  linkOne,
  linkTwo,
  videoSrc,
}) {

  const [flipped, setFlipped] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: `rotateX(${flipped ? 180 : 0}deg)`,
    backgroundColor: "white",
    border: "1px solid black",
    height: flipped ? "500px" : "345px",
    width: flipped ? "1000px" : "600px",
    top: flipped ? "20%" : "40%",
    color: "black",
    config: { mass: 5, tension: 600, friction: 100 },
  });


  if (window.matchMedia("(max-width: 999px)").matches) {
    props3.width = "340px";
    props3.height = flipped ? '100%' : '200px'
  }

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleButton1Click = () => {
    window.open(linkOne, "_blank");
  };

  const handleButton2Click = () => {
    window.open(linkTwo, "_blank");
  };

  return (
    <animated.div
      className={`${Styles.card} ${flipped ? Styles.flipped : ""}`}
      style={props3}
      onClick={handleCardClick}
    >
      <div className={Styles.front}>
        <h1 className={Styles['unflipped-title']} style={!flipped ? {display:'block'} : {display:'none'}}>{title}</h1>
        {!flipped && (
          <img className={Styles["project-img"]} src={imageSrc} alt={alt} />
        )}
      </div>
      {flipped && (
        <div className={Styles.back}>
          <div className={Styles.details}>
            <h3 className={Styles["card-title"]}>{title}</h3>
            <div className={Styles["card-text"]}>
              <p>{description}</p>
              <h4>
                {framework === "React.js" || framework === "Ruby on Rails"
                  ? "Framework:"
                  : "Language:"}{" "}
                {framework}
              </h4>
              <h4>Date created: {dateCreated}</h4>
              <div className={Styles["button-group"]}>
                {linkOne && (
                  <button
                    className={Styles["card-button"]}
                    onClick={handleButton1Click}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                )}
                {linkTwo && (
                  <button
                    className={Styles["card-button"]}
                    onClick={handleButton2Click}
                  >
                    <i className="fa-brands fa-github"></i>
                  </button>
                )}
              </div>
            </div>
            <div className={Styles["video-container"]}>
              <video
                className={Styles["project-video"]}
                autoPlay
                loop
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </animated.div>
  );
}

export default Card;
