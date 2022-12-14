import express from 'express';
import { categoriesRoutes, CATEGORIES_NAMESPACE } from './routes/categories.routes';

const app = express();

app.use(express.json());

app.use(CATEGORIES_NAMESPACE, categoriesRoutes);

app.listen(3333, () => console.log('Server is running'));
