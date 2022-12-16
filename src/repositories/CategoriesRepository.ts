import { Category } from '../model/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  constructor(private categories: Category[] = []) {}

  create({ name, description }: ICreateCategoryDTO) {
    const createdAt = new Date();

    const category = new Category(name, description, createdAt);

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}

export { CategoriesRepository };
