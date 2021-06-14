export interface IGetCar {
  id: number,
  name: string,
  color: string,
  isEngineStarted?: string
}

export interface ICar {
  name: string,
  color: string
}

export interface IGetWinners {
  page: number,
  limit: number
}

export interface IWinner {
  id: number,
  wins: number,
  time: number
}

export interface IWinners {
  id: number,
  wins: number,
  time: number
  car: IGetCar
}

export interface IStartAnimation {
  id: number
}

export interface IStartEngine {
  velocity: number,
  distance: number
}

export interface ICreateWinner {
  id: number,
  wins: number,
  time: number
}

export interface IUpdateWinner {
  wins: number,
  time: number
}

export interface IRiceAllPromise {
  success: string,
  id: number,
  time: number
}

export interface IScoreWinner {
  name: string,
  color: string,
  id: number,
  time: number
}
