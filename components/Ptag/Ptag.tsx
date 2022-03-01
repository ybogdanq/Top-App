import IPtagProps from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";

const Ptag = ({
  size = "m",
  children,
  className,
  ...props
}: IPtagProps): JSX.Element => {
  return (
    <p
      className={cn(className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.large]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Ptag;
