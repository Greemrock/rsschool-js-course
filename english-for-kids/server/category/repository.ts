import { categoriesStore } from '../service/categoriesStore';
import { getNextId } from '../service/nextId';
import { Category } from './category';

export function getCategories(): Promise<Category[]> {
  return Promise.resolve<Category[]>(categoriesStore);
}

export function getCategoryById(
  categoryId: number,
): Promise<Category | undefined> {
  return Promise.resolve(categoriesStore.find((cat) => cat.id === categoryId));
}

export const createCategory = (category: { name: string }): Promise<Category> => {
  const isExist = typeof categoriesStore.find(
    (cat) => cat.name.toLowerCase() === category.name.toLowerCase(),
  ) !== 'undefined';
  if (isExist) {
    return Promise.reject(
      new Error(`Category with name ${category.name} is already exists`),
    );
  }

  const id = getNextId();
  const iconSrc = '';
  const model = { ...category, id, iconSrc };
  categoriesStore.push(model);

  return Promise.resolve(model);
}

export const updateCategory = (
  id: number,
  categoryData: Category,
): Promise<Category> => {
  const selectedCategory = categoriesStore.find(
    (category) => category.id === categoryData.id,
  );
  if (selectedCategory === undefined) {
    return Promise.reject(
      new Error(`Category with id ${categoryData.id} doesn't exist`),
    );
  }

  selectedCategory.name = categoryData.name;
  selectedCategory.iconSrc = categoryData.iconSrc;
  return Promise.resolve(selectedCategory);
}

export const deleteCategory = (id: number): Promise<Category[]> => {
  const index = categoriesStore.findIndex((cat) => cat.id === id);
  if (index < 0) {
    Promise.reject(new Error('Category not found'));
  }
  categoriesStore.splice(index, 1);
  return Promise.resolve(categoriesStore);
}
