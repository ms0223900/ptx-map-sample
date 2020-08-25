import { Position } from "common-types";
import PTXHandlers from "../../lib/PTXHandlers";
import getNearMrtStations, { GetNearStationsOptions } from "../../lib/getNearMrtStations";
import { useCallback } from "react";
import useFetch from "../../lib/useFetch";
import { SingleMrtMarkerData } from "../../components/MapPart/types";

export interface UseQueryMrtBikeStationsOptions {
  position: Position
  zoom?: number | null
}

const useQueryMrtStations = ({
  position, zoom
}: UseQueryMrtBikeStationsOptions) => {
  const radius = PTXHandlers.getRadiusFromMapZoom(zoom);

  const handleQueryMrtStations = useCallback(async () => {
    const fetchOptions: GetNearStationsOptions = {
      lat: position[0],
      lon: position[1],
      radius,
    };
    const res = await getNearMrtStations(fetchOptions);
    return res;
  }, [position, radius]);
  
  const fetchedState = useFetch<SingleMrtMarkerData[]>({
    apiPath: '', // just for fulfill type
    initResponseData: [],
    fetchFn: handleQueryMrtStations,
  });

  return ({
    ...fetchedState,
    mrtStations: fetchedState.responseData,
    handleFetchMrtStations: fetchedState.handleFetchData,
  });
};

export default useQueryMrtStations;