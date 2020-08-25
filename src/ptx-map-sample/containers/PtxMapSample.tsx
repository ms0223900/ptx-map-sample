import React from 'react';
import usePtxMapSample from './functions/usePtxMapSample';
import MapPart from '../components/MapPart/MapPart';

const PtxMapSample = () => {
  const {
    loading,
    mrtStations,
    mapViewPort,
    handleFetchMrtStations,
    handleSetMapViewPort
  } = usePtxMapSample();

  return (
    <MapPart 
      position={mapViewPort.center}
      zoom={mapViewPort.zoom as number}
      markerListData={mrtStations}
      onSearchMrtStations={handleFetchMrtStations}
      onViewportChanged={handleSetMapViewPort}
    />
  );
};

export default PtxMapSample;