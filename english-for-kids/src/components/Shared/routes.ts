import { Categories } from "../../AdminPage/Page/Categories";
import { Words } from "../../AdminPage/Page/Words";
import { IRoutes } from "./interface";

export const routes: IRoutes[] = [
  // {
  //   path: "/Action setA",
  //   name: "Action setA",
  // },
  // {
  //   path: "/action_set_b",
  //   name: "Action setB",
  // },
  // {
  //   path: "/animal_set_a",
  //   name: "Animal setA",
  // },
  // {
  //   path: "/animal_set_b",
  //   name: "Animal setB",
  // },
  // {
  //   path: "/clothes",
  //   name: "Clothes",
  // },
  // {
  //   path: "/emotions",
  //   name: "Emotions",
  // },
  // {
  //   path: "/body_parts",
  //   name: "Body Parts",
  // },
  // {
  //   path: "/vegetable",
  //   name: "Vegetable",
  // },
  {
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    path: "/words",
    name: "Words",
    component: Words,
  },
];
