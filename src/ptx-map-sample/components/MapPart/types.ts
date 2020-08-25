import { Position } from "common-types";
import { ReactNode, ReactNodeArray } from "react";
import { MapProps } from "react-leaflet";
import { BoxProps } from "@material-ui/core";

export interface MapWrapperProps extends Omit<MapProps, 'padding'>, BoxProps {
  children: ReactNode | ReactNodeArray
  position: Position
}