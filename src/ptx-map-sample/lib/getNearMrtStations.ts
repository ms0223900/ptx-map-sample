import { MRT_STATIONS_LIVE_INFO_API, getMrtNearStationsUrl, GetMrtNearStationsUrlOptions } from "../constants/API";
import getPTXAuthHeader from "./getPTXAuthHeader";
import fetchData from './fetchData';
import { SingleMrtStationRawData, SingleMrtStationLiveInfo } from "ptx-map-sample";
import PTXHandlers from "./PTXHandlers";
import MrtStationsHandlers from "./MrtStationsHandlers";
import { SingleMrtMarkerData } from "../components/MapPart/types";

export interface GetNearStationsOptions extends GetMrtNearStationsUrlOptions {
  
}

const getNearMrtStations = async (options: GetNearStationsOptions) => {
  let res: SingleMrtMarkerData[] = [];

  const header = getPTXAuthHeader();
  const nearStationUri = getMrtNearStationsUrl(options);

  const mrtNearStations = await fetchData<SingleMrtStationRawData[]>({
    uri: nearStationUri,
    requestInit: {
      headers: header,
    },
    defaultRes: [],
    useCorsPrefix: false,
  });
  const stationIds = mrtNearStations.map(s => s.StationID);
  
  if(stationIds.length > 0) {
    // 會取得兩倍的資料(含去返程departure, destination)
    const stationsLiveInfoUri = PTXHandlers.getAPIWithStationIDsFilter(MRT_STATIONS_LIVE_INFO_API, stationIds);
    const mrtLiveInfoStations = await fetchData<SingleMrtStationLiveInfo[]>({
      uri: stationsLiveInfoUri,
      requestInit: {
        headers: header,
      },
      defaultRes: [],
      useCorsPrefix: false,
    });
    res = MrtStationsHandlers.makeMrtMarkerListDataFromRaw(mrtNearStations, mrtLiveInfoStations)();
    console.log(mrtNearStations, mrtLiveInfoStations);

  }

  return res;
};

export default getNearMrtStations;