import { Category } from "./category";

export const categoriesStore: Category[] = [
  {
    id: 1,
    path: "/action_a",
    name: "Action setA",
    iconSrc: "assets/images/cry.jpg",
  },
  {
    id: 2,
    path: "/action_b",
    name: "Action setB",
    iconSrc: "assets/images/open.jpg",
  },
  {
    id: 3,
    path: "/animal_a",
    name: "Animal setA",
    iconSrc: "assets/images/cat.jpg",
  },
  {
    id: 4,
    path: "/animal_b",
    name: "Animal setB",
    iconSrc: "assets/images/bird.jpg",
  },
  {
    id: 5,
    path: "/clothes",
    name: "Clothes",
    iconSrc: "assets/images/skirt.jpg",
  },
  {
    id: 6,
    path: "/emotions",
    name: "Emotions",
    iconSrc: "assets/images/sad.jpg",
  },
  {
    id: 7,
    path: "/body_parts",
    name: "Body Parts",
    iconSrc: "assets/images/eye.jpg",
  },
  {
    id: 8,
    path: "/vegetable",
    name: "Vegetable",
    iconSrc: "assets/images/cabbage.jpg",
  },
];

export function getCategories(): Promise<Category[]> {
  return Promise.resolve<Category[]>(categoriesStore);
}

export function getCategoryById(
  categoryId: number
): Promise<Category | undefined> {
  return Promise.resolve(categoriesStore.find((cat) => cat.id === categoryId));
}

export function createCategory(category: Category): Promise<Category> {
  const isExist =
    typeof categoriesStore.find(
      (cat) => cat.name.toLowerCase() === category.name.toLowerCase()
    ) !== "undefined";
  if (isExist) {
    return Promise.reject(
      new Error(`Category with name ${category.name} is already exists`)
    );
  }

  const id = categoriesStore.length + 1;
  const model = { ...category, id };
  categoriesStore.push(model);

  return Promise.resolve(model);
}

export function updateCategory(
  id: number,
  categoryData: Category
): Promise<Category> {
  const selectedCategory = categoriesStore.find(
    (category) => category.id === categoryData.id
  );
  if (selectedCategory === undefined) {
    return Promise.reject(
      new Error(`Category with id ${categoryData.id} doesn't exist`)
    );
  }

  selectedCategory.name = categoryData.name;
  selectedCategory.iconSrc = categoryData.iconSrc;
  return Promise.resolve(selectedCategory);
}

export function deleteCategory(id: number): Promise<void> {
  const index = categoriesStore.findIndex((cat) => cat.id === id);
  if (index < 0) {
    Promise.reject(new Error("Category not found"));
  }
  categoriesStore.splice(index, 1);
  return Promise.resolve();
}
