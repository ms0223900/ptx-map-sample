import React from 'react';
import { Box } from '@material-ui/core';
import MrtMarker from './MrtMarker';
import { MrtMarkerListProps } from './types';

const MrtMarkerList = (props: MrtMarkerListProps) => {
  return (
    <>
      {props.markerListData.map((m, i) => (
        <MrtMarker key={i} {...m} />
      ))}
    </>
  );
};

export default MrtMarkerList;