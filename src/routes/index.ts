import { Router } from 'express';
import userRoutes from '../modules/user/user.routes';
import neighbourhoodRoutes from '../modules/neighbourhood/neighbourhood.route';
import developmentRoutes from '../modules/development/development.route';
import waterfrontRoutes from '../modules/waterfront/waterfront.route';
import articleRoutes from '../modules/article/article.route';
import contactRoutes from '../modules/contact/contact.route';
import analyticsRoutes from '../modules/analytics/analytics.route';
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
      {
            path: '/developments',
            route: developmentRoutes,
      },
      {
            path: '/waterfronts',
            route: waterfrontRoutes,
      },
      {
            path: '/articles',
            route: articleRoutes,
      },
      {
            path: '/contacts',
            route: contactRoutes,
      },
      {
            path: '/analytics',
            route: analyticsRoutes,
      },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
