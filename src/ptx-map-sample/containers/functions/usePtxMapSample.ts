import useMapPosition from "../../lib/useMapPosition";
import { DEFAULT_MAP_CENTER, DEFAULT_MAP_ZOOM } from "../../config";
import useQueryMrtStations from "./useQueryMrtStations";

const usePtxMapSample = () => {
  const {
    mapViewPort,
    handleSetMapViewPort,
  } = useMapPosition({
    position: DEFAULT_MAP_CENTER,
    zoom: DEFAULT_MAP_ZOOM,
  });

  const {
    center, zoom
  } = mapViewPort;
  const queryParams = {
    position: center, zoom,
  };

  const queriedMrtStationsState = useQueryMrtStations(queryParams);

  return ({
    mapViewPort,
    handleSetMapViewPort,
    ...queriedMrtStationsState,
  });
};

export default usePtxMapSample;