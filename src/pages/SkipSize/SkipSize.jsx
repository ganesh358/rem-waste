import React, { Suspense } from "react";
import { getClasses } from "../../lib/Utils";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";
import classes from "./SkipSize.module.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import rightArrowIcon from "../../assets/right-arrow.svg";
import rightArrowActiveIcon from "../../assets/right-arrow-active.svg";
import CardSkeleton from "../../components/Card/CardSkeleton";
import { useSelector } from "react-redux";

const CardContainer = React.lazy(() => import("./CardContainer/CardContainer"));

let steps = [
  { id: "postcode", label: "Postcode", completed: true },
  { id: "waste-type", label: "Waste Type", completed: true },
  { id: "select-skip", label: "Select Skip", active: true },
  { id: "permit-check", label: "Permit Check", completed: false },
  { id: "choose-date", label: "Choose Date", completed: false },
  { id: "payment", label: "Payment", completed: false },
];

const SkipSize = () => {
  const { selectedSkip } = useSelector((state) => state.skipSize);

  return (
    <main className={classes.main}>
      <div className={getClasses(classes.container, selectedSkip?.id ? classes.containerWithPadding : "")}>
        <ProgressStepper steps={steps} />
        <div className={classes.headerSection}>
          <h1 className={classes.title}>Choose Your Skip Size</h1>
          <p className={classes.subtitle}>
            Select the skip size that best suits your needs.
          </p>
        </div>
        {/* card container */}
        <div className={classes.cardContainer}>
          <Suspense
            fallback={
              <>
                {Array.from({ length: 6 }).map((_, index) => (
                  <CardSkeleton key={index} />
                ))}
              </>
            }
          >
            <CardContainer />
          </Suspense>
        </div>
      </div>
      <div
        className={getClasses(
          classes.navigationWrapper,
          selectedSkip?.id ? classes.show : classes.hide
        )}
      >
        <div className={classes.navigationButtons}>
          <div>
            <PrimaryButton transparent>
              <img
                className={classes.backBtn}
                src={rightArrowActiveIcon}
                alt=""
              />
              Back
            </PrimaryButton>
          </div>
          <div className={classes.continueWrapper}>
            <div className={classes.contentHeader}>
              <div className={classes.sizeWrapper}>
                <h3 className={classes.skipTitle}>{selectedSkip?.size} Yard Skip</h3>
                <div className={classes.period}>
                  {selectedSkip?.hire_period_days} day hire period
                </div>
              </div>
              <div className={classes.priceContainer}>
                <div className={classes.price}>£{selectedSkip?.price_before_vat}</div>
                <div className={classes.priceUnit}>per week</div>
              </div>
            </div>
            <PrimaryButton>
              Continue <img src={rightArrowIcon} alt="" />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SkipSize;
