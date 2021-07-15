/* eslint-disable prettier/prettier */
import { Categories } from "../../AdminPage/Page/Categories";
import { Words } from "../../AdminPage/Page/Words";
import { IRoutes } from "./interface";

export const routes: IRoutes[] = [
  {
    id: 1,
    path: "/Action setA",
    name: "Action setA",
  },
  {
    id: 2,
    path: "/action_set_b",
    name: "Action setB",
  },
  {
    id: 3,
    path: "/animal_set_a",
    name: "Animal setA",
  },
  {
    id: 4,
    path: "/animal_set_b",
    name: "Animal setB",
  },
  {
    id: 5,
    path: "/clothes",
    name: "Clothes",
  },
  {
    id: 6,
    path: "/emotions",
    name: "Emotions",
  },
  {
    id: 7,
    path: "/body_parts",
    name: "Body Parts",
  },
  {
    id: 8,
    path: "/vegetable",
    name: "Vegetable",
  }
];

export const routePage: IRoutes[] = [
  { id: 1,
    path: "/categories",
    name: "Categories",
    component: Categories,
  },
  {
    id: 2,
    path: "/words",
    name: "Words",
    component: Words,
  },
]
