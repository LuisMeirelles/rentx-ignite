import { CategoriesRepository } from '../repositories/CategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

const categoriesRepository = new CategoriesRepository();

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  
  execute({ description, name }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists');
    }

    categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
