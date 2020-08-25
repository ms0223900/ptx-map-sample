import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { MapWrapperProps } from "./types";
import { Box, makeStyles } from "@material-ui/core";
import { MAP_TILE_URL, DEFAULT_MAP_ZOOM } from "../../config";
import '../../../style/styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 600,
  }
}));

const MapWrapper = (props: MapWrapperProps) => {
  const {
    children,
  } = props;
  
  const classes = useStyles();

  return (
    <Box
      className={classes.root}
      {...props}
    >
      <LeafletMap
        style={{
          height: "100%",
        }}
        zoom={DEFAULT_MAP_ZOOM}
        center={props.position}
        {...props}
      >
        <TileLayer
          opacity={0.9}
          url={MAP_TILE_URL}
        />
        {children}
      </LeafletMap>
    </Box>
  );
};

export default MapWrapper;
