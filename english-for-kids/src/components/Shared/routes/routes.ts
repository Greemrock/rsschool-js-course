import { IRoutes } from "../interface/interface";
import { PageCategories } from "../../PageCategories/PageCategories";
import { PageWords } from "../../PageWords/PageWords";

export const routePages: IRoutes[] = [
  { id: 1, path: "/categories", name: "Categories", component: PageCategories },
  {
    id: 2,
    path: "/words",
    name: "Words",
    component: PageWords,
  },
];
