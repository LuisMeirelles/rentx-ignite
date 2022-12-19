import express from 'express';
import { categoriesRoutes, CATEGORIES_NAMESPACE } from './routes/categories.routes';
import { specificationsRoutes, SPECIFICATIONS_NAMESPACE } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use(CATEGORIES_NAMESPACE, categoriesRoutes);
app.use(SPECIFICATIONS_NAMESPACE, specificationsRoutes);

app.listen(3333, () => console.log('Server is running'));
