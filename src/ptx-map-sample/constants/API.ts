export const PTX_APP_ID = 
  process.env.REACT_APP_PTX_APP_ID as string;
  
export const PTX_APP_KEY = 
  process.env.REACT_APP_PTX_APP_KEY as string; 

export interface GetMrtNearStationsUrlOptions {
  lat: number | string
  lon: number | string
  radius: number
}
export const getMrtNearStationsUrl = ({ lat, lon, radius, }: GetMrtNearStationsUrlOptions) => 
  `https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/Station/KRTC?&\$format=JSON&\$spatialFilter=nearby(StationPosition,${lat},${lon},${radius})`;

export const MRT_STATIONS_LIVE_INFO_API = 
  process.env.REACT_APP_MRT_LIVE_INFO_API as string;