import fs from 'fs';
import { parse as csvParse } from 'csv-parse';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    const stream = fs.createReadStream(file.path);

    const categories: IImportCategory[] = [];

    const parseFile = csvParse();

    stream.pipe(parseFile);

    return new Promise((resolve, reject) => {
      parseFile
        .on('data', (line) => {
          const [name, description] = line;

          categories.push({
            name,
            description
          });
        })
        .on('end', () => resolve(categories))
        .on('error', (error) => reject(error));
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);

    categories.map((category) => {
      const { name, description } = category;

      const categoryExists = this.categoriesRepository.findByName(name);

      if (!categoryExists) {
        this.categoriesRepository.create(category);
      }
    });
  }
}

export { ImportCategoryUseCase };
