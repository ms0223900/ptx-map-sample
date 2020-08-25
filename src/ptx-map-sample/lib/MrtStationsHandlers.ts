import { Position } from "common-types";
import { SingleLocationEstimateTime, SingleMrtMarkerData } from "../components/MapPart/types";
import { ID } from "common-types";
import { SingleMrtStationLiveInfo, SingleMrtStationRawData } from "ptx-map-sample";
import PTXHandlers from "./PTXHandlers";

// method中用() => () => any 的形式，是為了多語系的用途留下locale的參數接口

export interface MakeSingleMrtMarkerDataOptions {
  mrtStationName: string
  position: Position
  locationEstimateTimeListData: SingleLocationEstimateTime[]
}

class MrtStationsHandlers {
  static makeSingleMrtMarkerData({
    position, mrtStationName, locationEstimateTimeListData,
  }: MakeSingleMrtMarkerDataOptions): SingleMrtMarkerData {
    const res: SingleMrtMarkerData = {
      position,
      mrtStationName,
      locationEstimateTimeListData,
    };
    return res;
  }

  static makeSingleLocationEstimateTime(stationLiveInfo: SingleMrtStationLiveInfo) {
    return (): SingleLocationEstimateTime => {
      const res: SingleLocationEstimateTime = {
        name: PTXHandlers.getLocationLocaleName(stationLiveInfo.DestinationStationName)(),
        estimateTime: stationLiveInfo.EstimateTime,
      };
      return res;
    };
  }

  static getSingleStationLocationEstimateTimes(stationId: ID, mrtLiveInfoStations: SingleMrtStationLiveInfo[]) {
    return (): SingleLocationEstimateTime[] => {
      let res: SingleLocationEstimateTime[] = [];
      const matchedStations = mrtLiveInfoStations.filter(s => s.StationID === stationId);
      res = matchedStations.map(s => this.makeSingleLocationEstimateTime(s)());
      return res;
    };
  }

  static makeMrtMarkerListDataFromRaw(mrtStations: SingleMrtStationRawData[], mrtStationLiveInfos: SingleMrtStationLiveInfo[]) {
    return () => {
      const res: SingleMrtMarkerData[] = mrtStations.map(s => {
        const locationEstimateTimeListData = MrtStationsHandlers.getSingleStationLocationEstimateTimes(s.StationID, mrtStationLiveInfos)();
        const position = PTXHandlers.getPositionFromStationPosition(s.StationPosition);
        const mrtStationName = PTXHandlers.getLocationLocaleName(s.StationName)();

        return MrtStationsHandlers.makeSingleMrtMarkerData({
          position,
          mrtStationName,
          locationEstimateTimeListData,
        });
      });
      return res;
    };
  }
}

export default MrtStationsHandlers;