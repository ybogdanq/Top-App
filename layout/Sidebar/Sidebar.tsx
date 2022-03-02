import styles from "./Sidebar.module.css";
import React from "react";
import { SidebarProps } from "./Sidebar.props";

const Sidebar: React.FC<SidebarProps> = (props) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
