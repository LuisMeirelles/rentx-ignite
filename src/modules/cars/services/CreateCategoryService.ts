import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { ICategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

const categoriesRepository = new CategoriesRepository();

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
