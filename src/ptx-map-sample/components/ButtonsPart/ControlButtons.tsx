import React from 'react';
import { Box } from '@material-ui/core';
import Control from 'react-leaflet-control';
import MrtSearchButton from './MrtSearchButton';
import { ControlButtonsProps } from './types';

const ControlButtons = (props: ControlButtonsProps) => {
  return (
    <Control position={'bottomright'}>
      <MrtSearchButton {...props} />
    </Control>
  );
};

export default ControlButtons;