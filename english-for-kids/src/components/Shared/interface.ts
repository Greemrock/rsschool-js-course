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

export interface IMenuProps {
  routes: ICategory[];
  // setNumberCategory: (number: number) => void;
  setModal: (stateModal: boolean) => void;
}

export interface ICategoryCardsProps {
  setNumberCategory: (number: number) => void;
}

export interface CategoryCardProps {
  name: string;
  image: string;
  link: string;
  // setNumberCategory: (number: number) => void;
  // index: number;
}

export interface IHeaderProps {
  routes: ICategory[];
  statusCheckbox: boolean;
  setStatusCheckbox: (statusCheckbox: boolean) => void;
  // setNumberCategory: (number: number) => void;
  setModal: (stateModal: boolean) => void;
}

export interface IButtonProps {
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
