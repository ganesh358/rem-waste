import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSkipSize } from "../../../api/SkipSizeService";
import { skipSliceActions } from "../../../store/Slice/SkipSizeSlice";
import classes from "./CardContainer.module.css";
import cardImages from "../../../assets/card-image.png";
import cautionIcon from "../../../assets/caution.svg";
import checkIcon from "../../../assets/checkmark.svg";
import rightArrowActiveIcon from "../../../assets/right-arrow-active.svg";
import Card from "../../../components/Card/Card";
import PrimaryButton from "../../../components/Buttons/PrimaryButton";
import CardSkeleton from "../../../components/Card/CardSkeleton";

const CardContainer = () => {
  const dispatch = useDispatch();
  const { data, isFetched, selectedSkip } = useSelector(
    (state) => state.skipSize
  );

  useEffect(() => {
    if (!isFetched) {
      dispatch(getSkipSize());
    }
  }, [isFetched, dispatch]);

  return (
    <>
      {data.length ? (
        data.map((skip) => (
          <Card
            onClick={() => dispatch(skipSliceActions.setSelectedSize(skip))}
            key={skip?.id}
            isSelected={skip?.id === selectedSkip?.id}
          >
            <div className={classes.imageContainer}>
              <div className={classes.image}>
                <img
                  src={cardImages}
                  alt={`${skip?.size} ${skip?.hire_period_days} Skip`}
                  loading="lazy"
                />
              </div>

              {skip?.size && (
                <div className={classes.sizeBadge}>{skip?.size} Yards</div>
              )}
              {!skip?.allowed_on_road && !skip?.allows_heavy_waste && (
                <div className={classes.privatePropertyBadge}>
                  <img src={cautionIcon} alt="" /> Private Property Only
                </div>
              )}

              {selectedSkip?.id === skip?.id && (
                <div className={classes.selectedIndicator}>
                  <img src={checkIcon} alt="" />
                </div>
              )}
            </div>

            <div className={classes.content}>
              <div className={classes.contentHeader}>
                <div>
                  <h3 className={classes.skipTitle}>{skip?.size} Yard Skip</h3>
                  <div className={classes.period}>
                    {skip?.hire_period_days} day hire period
                  </div>
                </div>
                <div className={classes.priceContainer}>
                  <div className={classes.price}>£{skip?.price_before_vat}</div>
                  <div className={classes.priceUnit}>per week</div>
                </div>
              </div>
            </div>

            <div className={classes.footer}>
              <PrimaryButton
                onClick={() => dispatch(skipSliceActions.setSelectedSize(skip))}
                transparent={selectedSkip?.id !== skip?.id}
              >
                {selectedSkip?.id === skip?.id ? (
                  "Selected"
                ) : (
                  <>
                    Select This Skip <img src={rightArrowActiveIcon} alt="" />{" "}
                  </>
                )}
              </PrimaryButton>
            </div>
          </Card>
        ))
      ) : (
        <>
          {Array.from({ length: 6 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </>
      )}
    </>
  );
};

export default memo(CardContainer);
