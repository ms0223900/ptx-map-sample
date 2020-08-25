import React from 'react';
import { Box } from '@material-ui/core';
import MapWrapper from './MapWrapper';
import { DEFAULT_MAP_CENTER } from '../../config';
import ControlButtons from '../ButtonsPart/ControlButtons';
import MrtMarkerList from './MrtMarkerList';

const MapPart = () => {
  return (
    <MapWrapper
      position={DEFAULT_MAP_CENTER}
    >
      <MrtMarkerList 
        // position={DEFAULT_MAP_CENTER} 
        // locationEstimateTimeListData={[]} 
        // mrtStationName={'美麗島'} 
        markerListData={[]}
      />
      <ControlButtons onSearchMrtStations={() => {}} />
    </MapWrapper>
  );
};

export default MapPart;