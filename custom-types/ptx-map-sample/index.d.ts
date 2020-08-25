declare module "ptx-map-sample" {
  import { GetMrtNearStationsUrlOptions } from "../../src/ptx-map-sample/constants/API";

  interface MrtStationPosition {
    PositionLat: number
    PositionLon: number
  }

  interface MrtNameType {
    Zh_tw: string
    En: string
  }

  interface SingleMrtStationRawData {
    StationUID: string
    StationID: string
    StationName: MrtNameType
    StationPosition: MrtBikeStationPosition
    StationAddress: string
    BikeAllowOnHoliday: boolean
    SrcUpdateTime: string
    UpdateTime: string
    VersionID: number
  }

  interface SingleMrtStationLiveInfo {
    LineNO: string
    LineID: string
    LineName: MrtNameType
    StationID: string
    StationName: MrtNameType
    TripHeadSign: string
    DestinationStaionID: string
    DestinationStationID: string
    DestinationStationName: MrtNameType
    EstimateTime: number
    SrcUpdateTime: string
    UpdateTime: string
  }
}