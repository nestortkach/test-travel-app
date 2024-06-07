export interface IHiglight {
  image: string;
  title: string;
  additionalInfo: string;
  curator: boolean;
  rate?: number;
}

export interface IStopPlace {
  image: string;
  title: string;
  rate?: number;
  additionalInfo: string;
  curator: boolean;
}

export interface IRegion {
  name: string;
  points: string[];
  description: string;
  higlights: IHiglight[];
  stopPlaces: IStopPlace[];
  dailyPlans: IDailyPlan[];
}

export interface IRegionShortInfo {
  name: string;
  points: string[];
  description: string;
}

export interface IRegionInfoSwiper {
  label: string;
  data: IHiglight[] | IStopPlace[];
  button?: React.ReactNode;
  showDivider?: boolean;
}

export interface IDailyPlanPlace {
  image: string;
  name: string;
  curator: boolean;
  additionalInfo: string;
}

export interface IDailyPlan {
  title: string;
  time: string;
  places: IDailyPlanPlace[];
  showDivider?: boolean;
}
