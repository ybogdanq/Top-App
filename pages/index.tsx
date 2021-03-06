import type { NextPage } from "next";
import Htag from "../components/Htag/Htag";
import Button from "../components/Button/Button";
import { useState } from "react";
import Ptag from "../components/Ptag/Ptag";
import Rating from "../components/Rating/Rating";
import { withLayout } from "../layout/Layout";

const Home: NextPage = (): JSX.Element => {
  const [btnClass, setBtnClass] = useState<"right" | "down">("right");
  const onBtnClick = () => {
    return btnClass === "right" ? setBtnClass("down") : setBtnClass("right");
  };

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Something right here</Htag>
      <Button
        appearance="primary"
        onClick={() => onBtnClick()}
        arrow={btnClass}
      >
        Some text
      </Button>
      <Button appearance="ghost">Some text</Button>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
};

export default withLayout(Home);
