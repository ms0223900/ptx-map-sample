import { Position } from "common-types";

export const DEFAULT_MAP_CENTER: Position = [22.631411, 120.301915];
export const DEFAULT_MAP_ZOOM = 14;

export const MAP_TILE_URL = 'https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}';
// 國土測繪中心map

// export const MAP_TILE_URL = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' 
// open street map

export const ICON_IMAGE_URL = './asset/images/icons/icon-marker.svg';
export const ICON_MRT_URL = './asset/images/icons/icon-directions_subway-24px.svg';

export const MAP_ZOOM_RADIUS = {
  s: 3000, //meter 公尺
  m: 5000,
  l: 7000,
  min: 3000,
  max: 10000,
};