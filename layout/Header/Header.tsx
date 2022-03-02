import React from "react";
import { HeaderProps } from "./Header.props";

const Header: React.FC<HeaderProps> = (props): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
