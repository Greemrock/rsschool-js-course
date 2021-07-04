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
  handleClick: (word: string) => void;
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
  statusCheckbox: boolean;
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
  match: number;
  fail: number;
}
