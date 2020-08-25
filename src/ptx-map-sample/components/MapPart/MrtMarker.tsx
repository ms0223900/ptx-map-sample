import React from 'react';
import { Box } from '@material-ui/core';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import MrtMarkerContent from './MrtMarkerContent';
import { MrtMarkerProps } from './types';
import { ICON_IMAGE_URL } from '../../config';

const MrtMarker = (props: MrtMarkerProps) => {
  const icon = L.icon({
    iconUrl: ICON_IMAGE_URL,
    iconSize: [24, 34],
  });

  return (
    <Marker 
      icon={icon}
      position={props.position}
    >
      <Popup autoPan={false}>
        <MrtMarkerContent {...props} />
      </Popup>
    </Marker>
  );
};

export default MrtMarker;