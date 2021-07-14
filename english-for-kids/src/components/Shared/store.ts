// import { getCategories } from "../../AdminPage/api/api";

// const { items: categories } = async () => {
//   await getCategories();
// };

export const store = {
  categories: [],
  star: [],
  matchCards: [],
  playMode: false,
} as {
  // categories: ICategory[];
  star: boolean[];
  matchCards: number[];
  playMode: boolean;
};

// interface ICategory {
//   id: number;
//   name: string;
// }
