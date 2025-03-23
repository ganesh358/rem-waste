import React from "react";
import classes from "./CardSkeleton.module.css";

const CardSkeleton = ({
  imageHeight = 200,
  titleWidth = "70%",
  descriptionLines = 2,
  showFooter = true,
  className = "",
}) => {
  return (
    <article className={`${classes.skeleton} ${className}`}>
      <div
        className={classes.imageContainer}
        style={{ height: `${imageHeight}px` }}
      >
        <div className={classes.image}></div>
      </div>

      <div className={classes.content}>
        <div className={classes.title} style={{ width: titleWidth }}></div>

        <div className={classes.descriptionContainer}>
          {Array(descriptionLines)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className={classes.description}
                style={{ width: `${85 - index * 10}%` }}
              ></div>
            ))}
        </div>
      </div>

      {showFooter && (
        <div className={classes.footer}>
          <div className={classes.button}></div>
        </div>
      )}
    </article>
  );
};

export default CardSkeleton;
