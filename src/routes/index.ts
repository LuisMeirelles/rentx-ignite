import { Router } from 'express';
import { categoriesRoutes, CATEGORIES_NAMESPACE } from './categories.routes';
import { specificationsRoutes, SPECIFICATIONS_NAMESPACE } from './specifications.routes';

const router = Router();

router.use(CATEGORIES_NAMESPACE, categoriesRoutes);
router.use(SPECIFICATIONS_NAMESPACE, specificationsRoutes);

export { router };
