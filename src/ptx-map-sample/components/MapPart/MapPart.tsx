import React from 'react';
import MapWrapper from './MapWrapper';
import ControlButtons from '../ButtonsPart/ControlButtons';
import MrtMarkerList from './MrtMarkerList';
import { MapPartProps } from './types';

const MapPart = ({
  zoom,
  position,
  markerListData,
  onSearchMrtStations,
  onViewportChanged
}: MapPartProps) => {
  return (
    <MapWrapper
      position={position}
      zoom={zoom}
      onViewportChanged={onViewportChanged}
    >
      <MrtMarkerList 
        // position={DEFAULT_MAP_CENTER} 
        // locationEstimateTimeListData={[]} 
        // mrtStationName={'美麗島'} 
        markerListData={markerListData}
      />
      <ControlButtons onSearchMrtStations={onSearchMrtStations} />
    </MapWrapper>
  );
};

export default MapPart;