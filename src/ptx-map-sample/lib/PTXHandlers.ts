import { ID } from "common-types";
import { MAP_ZOOM_RADIUS } from "../config";
import { MrtNameType, MrtStationPosition } from "ptx-map-sample";
import { Position } from "common-types";

const ODATA_FILTER_CONDITION = ' or ';

class PTXHandlers {
  static getPositionFromStationPosition(mrtPos: MrtStationPosition): Position {
    return [mrtPos.PositionLat, mrtPos.PositionLon];
  }

  static getLocationLocaleName(name: MrtNameType) {
    return () => { // 如果有使用intl可以修改此method為(locale) => { //... }
      return name.Zh_tw;
    };
  }

  static makeEqFilterStr(stationId: ID) {
    return `StationID eq '${stationId}'`;
  }

  static joinStationIDsFilterStr(stationIds: ID[]) {
    const eqStationIds = stationIds.map(s => PTXHandlers.makeEqFilterStr(s)); 
    const res = eqStationIds.join(ODATA_FILTER_CONDITION);
    return res;
  }

  static getAPIWithStationIDsFilter(uri: string, stationIds: ID[]): string {
    const joinedFilterConditionStr = this.joinStationIDsFilterStr(stationIds);
    const res = `${uri}${joinedFilterConditionStr}`;
    return res;
  }

  static getRadiusFromMapZoom(zoom?: number | null) {
    if(!zoom || zoom < 13) 
      return MAP_ZOOM_RADIUS.max;  
    if(zoom === 15)
      return MAP_ZOOM_RADIUS.s;
    if(zoom === 14)
      return MAP_ZOOM_RADIUS.m;
    if(zoom === 13)
      return MAP_ZOOM_RADIUS.l;
    return MAP_ZOOM_RADIUS.min;
  }
}

export default PTXHandlers;