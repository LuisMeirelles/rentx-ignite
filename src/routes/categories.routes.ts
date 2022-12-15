import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createdAt = new Date();

  const category = new Category(name, description, createdAt);

  categories.push(category);

  return response.sendStatus(201);
});

const CATEGORIES_NAMESPACE = '/categories';

export { categoriesRoutes, CATEGORIES_NAMESPACE };
