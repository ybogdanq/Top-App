import ITagProps, { colors } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

const Tag = ({
  color = colors.ghost,
  href,
  size = "m",
  children,
  className,
  ...props
}: ITagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.ghost]: color == colors.ghost,
        [styles.red]: color == colors.red,
        [styles.green]: color == colors.green,
        [styles.primary]: color == colors.primary,
        [styles.gray]: color == colors.gray,
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
