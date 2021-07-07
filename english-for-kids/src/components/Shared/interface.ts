export interface ICardType {
  id?: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
}

export interface IGameCardProps {
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
  handleClick: (word: string, id: number) => void;
  id: number;
}

export interface ICollectionCards {
  [x: number]: ICardType[];
}

export interface ICategory {
  id: number;
  link: string;
  title: string;
  image: string;
}

export interface ICardsType {
  cards: ICardType[];
  title: string;
  randomCards: ICardType[];
}

export interface ITitleProps {
  title: ICategory[];
}

export interface IMainPageProps {
  title: ICategory[];
  cards: ICollectionCards;
}

export interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
}

export interface IHeaderProps {
  title: ICategory[];
  statusCheckbox: boolean;
  setStatusCheckbox: (statusCheckbox: boolean) => void;
}

export interface IButtonType {
  statusCheckbox: boolean;
  setStatusCheckbox: () => void;
}

export interface IHamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
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
