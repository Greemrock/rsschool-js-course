export interface IGetCar {
  id: number;
  name: string;
  color: string;
  isEngineStarted?: string;
}

export interface ICar {
  name: string;
  color: string;
}

export interface IWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IWinners {
  id: number;
  wins: number;
  time: number;
  car: ICar;
}

export interface IStartAnimation {
  id: number;
}

export interface IStartEngine {
  velocity: number;
  distance: number;
}

export interface ICreateWinner {
  id: number;
  wins: number;
  time: number;
}

export interface IUpdateWinner {
  wins: number;
  time: number;
}
