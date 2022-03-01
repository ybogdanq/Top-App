import IRatingProps from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./Star.svg";
import { useEffect, useState, KeyboardEvent } from "react";

const Rating: React.FC<IRatingProps> = ({
  rating,
  setRating,
  isEditable = false,
  className,
  ...props
}): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpace = (
    currentRating: number,
    e: KeyboardEvent<SVGAElement>
  ) => {
    if (e.code !== "Space" || !setRating) return;
    setRating(currentRating);
  };

  const constructRating = (currentRating: number) => {
    const newRatingArr = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(currentRating)}
        >
          <StarIcon
            className={cn(styles.star, className, {
              [styles.filled]: i < currentRating,
            })}
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
            {...props}
          />
        </span>
      );
    });

    setRatingArray(newRatingArr);
  };

  return (
    <div>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
