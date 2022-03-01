import styles from "./Button.module.css";
import { IButtonProps } from "./Button.props";
import cn from "classnames";
import ArrowIcon from "../../public/Vector.svg";

const Button = ({
  appearance,
  children,
  arrow = "none",
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
            [styles.right]: arrow === "right",
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
