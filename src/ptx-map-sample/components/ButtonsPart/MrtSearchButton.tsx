import React from 'react';
import { Box, Button } from '@material-ui/core';
import { MrtSearchButtonProps } from './types';
import { ICON_MRT_URL } from '../../config';

const MrtSearchButton = (props: MrtSearchButtonProps) => {
  return (
    <Button variant={'contained'}>
      <img 
        src={ICON_MRT_URL}
        alt={'mrt-icon'}
      />
    </Button>
  );
};

export default MrtSearchButton;