import React from 'react';
import { Box } from '@material-ui/core';
import MapWrapper from './MapWrapper';
import { DEFAULT_MAP_CENTER } from '../../config';
import MrtMarker from './MrtMarker';
import ControlButtons from '../ButtonsPart/ControlButtons';

const MapPart = () => {
  return (
    <MapWrapper
      position={DEFAULT_MAP_CENTER}
    >
      <MrtMarker 
        position={DEFAULT_MAP_CENTER} 
        locationEstimateTimeListData={[]} 
        mrtStationName={'美麗島'} 
      />
      <ControlButtons onSearchMrtStations={() => {}} />
    </MapWrapper>
  );
};

export default MapPart;