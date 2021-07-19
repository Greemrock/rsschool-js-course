export interface ICardProps {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  categoryId: number;
  id: number;
}

export interface ICategory {
  id: number;
  name: string;
  path: string;
  iconSrc: string;
}

export interface IGameCardProps {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  handleClick: (word: string, id: number) => void;
  id: number;
}

export interface IRoutes {
  id: number;
  path: string;
  name: string;
  component: React.FC;
}

export interface ICardsProps {
  cards: ICardProps[];
  title: string;
  randomCards: ICardProps[];
}

export interface ICategoryCardsProps {
  setNumberCategory: (number: number) => void;
}

export interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
}

export interface IHeaderProps {
  routes: ICategory[];
  statusCheckbox: boolean;
  setStatusCheckbox: (statusCheckbox: boolean) => void;
  setModal: (stateModal: boolean) => void;
}

export interface IButtonProps {
  statusCheckbox: boolean;
  setStatusCheckbox: () => void;
}

export interface IStarProps {
  arrStar: boolean[];
}

export interface IPlayButtonProps {
  play: boolean;
  setPlay: (x: boolean) => void;
}

export interface IWinProps {
  win: boolean;
  mistake: number;
}
