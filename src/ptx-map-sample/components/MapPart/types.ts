import { Position } from "common-types";
import { ReactNode, ReactNodeArray } from "react";
import { MapProps } from "react-leaflet";
import { BoxProps } from "@material-ui/core";
import { ControlButtonsProps } from "../ButtonsPart/types";

export interface SingleLocationEstimateTime {
  name: string
  estimateTime: number // minutes
}

export interface MrtMarkerContentProps {
  mrtStationName: string
  locationEstimateTimeListData: SingleLocationEstimateTime[]
}

export interface SingleMrtMarkerData extends MrtMarkerContentProps { // 將data和props分離，組件props更好擴充
  position: Position
} 

export interface MrtMarkerProps extends SingleMrtMarkerData {
}

export interface MrtMarkerListProps {
  markerListData: MrtMarkerProps[]
}

export interface MapWrapperProps extends Omit<MapProps, 'padding'>, BoxProps {
  children: ReactNode | ReactNodeArray
  position: Position
}

export interface MapPartProps extends MrtMarkerListProps, ControlButtonsProps {
  position: Position
}