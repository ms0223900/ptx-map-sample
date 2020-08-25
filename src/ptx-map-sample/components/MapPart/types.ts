import { Position } from "common-types";
import { ReactNode, ReactNodeArray } from "react";
import { MapProps } from "react-leaflet";
import { BoxProps } from "@material-ui/core";

export interface SingleLocationEstimateTime {
  name: string
  estimateTime: number // minutes
}

export interface MrtMarkerContentProps {
  mrtStationName: string
  locationEstimateTimeListData: SingleLocationEstimateTime[]
}

export interface MrtMarkerProps extends MrtMarkerContentProps {
  position: Position
}

export interface MapWrapperProps extends Omit<MapProps, 'padding'>, BoxProps {
  children: ReactNode | ReactNodeArray
  position: Position
}