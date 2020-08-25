import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { MrtMarkerContentProps } from './types';

const MrtMarkerContent = ({
  mrtStationName, locationEstimateTimeListData,
}: MrtMarkerContentProps) => {
  return (
    <Box>
      <Typography variant={'h6'}>
        {mrtStationName}
      </Typography>
      <Divider />
      {locationEstimateTimeListData.map((l, i) => (
        <>
          <Typography key={i}>
            {`往${l.name}：約${l.estimateTime}分`}
          </Typography>
        </>
      ))}
    </Box>
  );
};

export default MrtMarkerContent;