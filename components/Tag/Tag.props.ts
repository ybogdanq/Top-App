import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface ITagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  color?: colors;
  href?: string;
  children: ReactNode;
}

export enum colors {
  red = "red",
  ghost = "ghost",
  primary = "primary",
  green = "green",
  gray = "gray",
}
