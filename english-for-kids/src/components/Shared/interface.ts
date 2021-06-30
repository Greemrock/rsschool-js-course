export interface ICardType {
  id?: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
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
  isOn: boolean;
  handleToggle: () => void;
}

export interface IHamburgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
