import { Router } from 'express';
import userRoutes from '../modules/user/user.routes';
import neighbourhoodRoutes from '../modules/neighbourhood/neighbourhood.route';
const router = Router();

const moduleRoutes = [
      {
            path: '/users',
            route: userRoutes,
      },
      {
            path: '/neighbourhoods',
            route: neighbourhoodRoutes,
      },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
