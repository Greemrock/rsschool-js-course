import { routePages } from "../shared/routes/routes";
import { CategoriesItem } from "./CategoriesItem/CategoriesItem";
import { CategoriesItemCreate } from "./CategoriesItemCreate/CategoriesItemCreate";

export const PageCategories: React.FC = () => {
  // const [items, setItems] = useState<ICategory[]>([]);
  // useEffect(() => {
  //   const categories = getCategories();
  //   const data = async () => {
  //     setItems(await categories);
  //   };
  //   data();
  // }, [items]);

  return (
    <>
      {routePages.map((item) => {
        return (
          <CategoriesItem key={item.id} name={item.name} idCategory={item.id} />
        );
      })}
      <CategoriesItemCreate />
    </>
  );
};
