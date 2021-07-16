import { IRoutes } from "./interface";
import { Categories } from "../../AdminPage/Page/Categories";
import { Words } from "../../AdminPage/Page/Words";

export const routePages: IRoutes[] = [
  { id: 1, path: "/categories", name: "Categories", component: Categories },
  {
    id: 2,
    path: "/words",
    name: "Words",
    component: Words,
  },
];
