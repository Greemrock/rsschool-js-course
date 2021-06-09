export interface ICar {
  id: number,
  name: string,
  color: string,
  isEngineStarted: string
}

export interface IGetCar {
  id: number,
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
  car: ICar
}

