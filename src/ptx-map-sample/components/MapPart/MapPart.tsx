import React from 'react';
import { Box } from '@material-ui/core';
import MapWrapper from './MapWrapper';
import { DEFAULT_MAP_CENTER } from '../../config';

const MapPart = () => {
  return (
    <MapWrapper
      position={DEFAULT_MAP_CENTER}
    >
      <></>
    </MapWrapper>
  );
};

export default MapPart;