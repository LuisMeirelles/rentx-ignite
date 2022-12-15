import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  constructor(private categories: Category[] = []) {}

  create({ name, description }: ICreateCategoryDTO) {
    const createdAt = new Date();

    const category = new Category(name, description, createdAt);

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository };
