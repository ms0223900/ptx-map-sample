import React from 'react';
import { Box } from '@material-ui/core';
import MapWrapper from './MapWrapper';
import { DEFAULT_MAP_CENTER } from '../../config';
import MrtMarker from './MrtMarker';

const MapPart = () => {
  return (
    <MapWrapper
      position={DEFAULT_MAP_CENTER}
    >
      <MrtMarker position={DEFAULT_MAP_CENTER} locationEstimateTimeListData={[]} mrtStationName={'美麗島'} />
    </MapWrapper>
  );
};

export default MapPart;