import styles from "./Footer.module.css";
import React from "react";
import { FooterProps } from "./Footer.props";
import cn from "classnames";
import { format } from "date-fns";

const Footer: React.FC<FooterProps> = ({
  className,
  ...props
}): JSX.Element => {
  return (
    <footer {...props} className={cn(styles.wrapper, className)}>
      <p className={styles.footer__creator}>
        Bohdan Yereshchenko {format(new Date(), "yyyy")}.
      </p>

      <div className={styles.polytics__terms}>
        <a href="#">Пользовательское соглашение</a>
      </div>

      <div className={styles.polytics__privacy}>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;
