// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuSvgrepoComsvgIcon(props: MenuSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 150 150"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 30h120c8.284 0 15-6.716 15-15s-6.716-15-15-15H15C6.716 0 0 6.716 0 15s6.716 15 15 15zm120 30H15C6.716 60 0 66.716 0 75s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15zm0 60H15c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z"
        }
      ></path>
    </svg>
  );
}

export default MenuSvgrepoComsvgIcon;
/* prettier-ignore-end */
