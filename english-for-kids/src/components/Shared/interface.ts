export type CardType = {
  id?: number;
  word: string;
  translation: string;
  image: string;
  audioSrc: string;
};

export interface ICollectionCards {
  [x: number]: CardType[];
}

export interface ICategory {
  id: number;
  link: string;
  title: string;
  image: string;
}

export interface CardsType {
  cards: CardType[];
}

export interface ICategoriesArr {
  title: ICategory[];
}

export interface CategoryCardProps {
  name: string;
  image: string;
}
