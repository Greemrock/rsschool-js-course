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

export interface ICategoryCardsProps {
  setNumberCategory: (number: number) => void;
}

export interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
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
