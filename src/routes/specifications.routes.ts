import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

const SPECIFICATIONS_NAMESPACE = '/specifications';

export { specificationsRoutes, SPECIFICATIONS_NAMESPACE };
