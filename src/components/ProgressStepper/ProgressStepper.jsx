import { useEffect, useRef } from "react";
import classes from "./ProgressStepper.module.css";
import checkIcon from "../../assets/checkmark.svg";

const ProgressStepper = ({ steps }) => {
  const selectedPageRef = useRef(null);
  useEffect(() => {
    const node = selectedPageRef.current;
    if (node) {
      if (node instanceof Element) {
        node.scrollIntoView();
      }
    }
  }, [selectedPageRef]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.stepper}>
        {steps.map((step, index) => (
          <div key={step.id} className={classes.stepContainer} ref={step.active && selectedPageRef}>
            {/* Step indicator */}
            <div className={classes.indicatorWrapper}>
              <div
                className={`${classes.indicator} ${step.completed
                  ? classes.completed
                  : step.active
                    ? classes.active
                    : ""
                  }`}
              >
                {step.completed ? (
                  <img src={checkIcon} className={classes.checkIcon} alt="" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
            </div>

            {/* Step label */}
            <div className={classes.labelContainer}>
              <div
                className={`${classes.label} ${step.completed || step.active ? classes.labelActive : ""
                  }`}
              >
                {step.label}
              </div>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className={`${classes.connector} ${step.completed ? classes.connectorCompleted : ""
                  }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressStepper;
