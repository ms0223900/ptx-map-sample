import { useState, useEffect, useCallback } from "react";
import { Position } from "common-types";
import { Viewport } from "react-leaflet";

export interface UseMapPositionOptions {
  zoom?: number | undefined
  position: Position
}

const useMapPosition = (options: UseMapPositionOptions) => {
  const [mapViewPort, setMapViewPort] = useState({
    zoom: 14 as number | undefined | null,
    center: options.position,
  });

  const handleSetMapViewPort = useCallback((viewPort: Viewport) => {
    viewPort.center && setMapViewPort({
      ...viewPort,
      center: viewPort.center,
    });
  }, []);

  useEffect(() => {
    setMapViewPort({
      zoom: options.zoom,
      center: options.position
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(options)]);

  return ({
    mapViewPort,
    handleSetMapViewPort,
  });
};

export default useMapPosition;