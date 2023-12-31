import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Styles from "./Card.module.css";


function Card({
    imageSrc,
    title,
    description,
    dateCreated,
    framework,
    alt,
    linkOne,
    linkTwo,
    linkThree,
    videoSrc,
  }) {
  const [flipped, setFlipped] = useState(false);

  // project card flipped/ unflipped styling
  const props3 = useSpring({
    opacity: 1,
    transform: `rotateX(${flipped ? 180 : 0}deg)`,
    backgroundColor: "white",
    border: "1px solid black",
    height: flipped ? "31.25em" : "21.5625em",
    width: flipped ? "62.5em" : "37.5em",
    top: flipped ? "20%" : "40%",
    color: "black",
    config: { mass: 5, tension: 600, friction: 100 },
  });

  if (window.matchMedia("(max-width: 999px)").matches) {
    props3.width = "21.25em";
    props3.height = flipped ? "80%" : "12.5em";
  }

  const handleCardClick = () => {
    setFlipped(!flipped);
  };

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <animated.div
      className={`${Styles.card} ${flipped ? Styles.flipped : ""}`}
      style={props3}
      onClick={handleCardClick}
    >
      <div className={Styles.front}>
        <h1
          className={`${Styles["unflipped-title"]} ${
            flipped ? Styles.hideTitle : ""
          }`}
        >
          <div style={{ textTransform: 'uppercase'}}>
             {title}
          </div>

        </h1>
        {!flipped && (
          <img className={Styles["project-img"]} style={{cursor:'pointer'}} src={imageSrc} alt={alt} />
        )}
      </div>
      {flipped && (
        <div className={Styles.back}>
          <div className={Styles.details}>
            <h3 className={Styles["card-title"]}>{title}</h3>
            <div className="card-content">
              <div className={Styles["card-text"]}>
                <p>{description}</p>
                <div className={Styles["card-details-bottom"]}>
                  <div className={Styles["sub-details"]}>
                    <h4>
                      {framework === "React.js" || framework === "Ruby on Rails"
                        ? "Framework:"
                        : "Language:"}{" "}
                      {framework}
                    </h4>
                    <h4>Date created: {dateCreated}</h4>
                  </div>
                  <div className={Styles["button-group"]}>
                    {linkOne && (
                      <button
                        className={Styles["card-button"]}
                        onClick={() => handleButtonClick(linkOne)}
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </button>
                    )}
                    {linkTwo && (
                      <button
                        className={Styles["card-button"]}
                        onClick={() => handleButtonClick(linkTwo)}
                      >
                        <i className="fa-brands fa-github"></i>
                      </button>
                    )}
                    {linkThree && (
                      <button
                        className={Styles["card-button"]}
                        onClick={() => handleButtonClick(linkThree)}
                      >
                        <i className="fa-brands fa-youtube"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className={Styles["video-container"]}>
                <video
                  className={Styles["project-video"]}
                  autoPlay
                  loop
                  playsInline
                  type="video/mp4"
                  src={videoSrc}
                >
                </video>
                <div className={Styles["empty-vid-container"]}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </animated.div>
  );
}

export default Card;
