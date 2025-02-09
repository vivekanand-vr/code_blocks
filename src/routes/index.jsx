import { formsRoutes } from './form-routes';
import { navbarRoutes } from './navbar-routes';
import { sidebarRoutes } from './sidebar-routes';

export const allRoutes = [
  {
    path: '/forms',
    name: 'Forms',
    routes: formsRoutes
  },
  {
    path: '/navbars',
    name: 'Navbars',
    routes: navbarRoutes
  },
  {
    path: '/sidebars',
    name: 'Sidebars',
    routes: sidebarRoutes
  }
];

// This will be used to get all flattened routes for React Router
export const getFlattenedRoutes = () => {
  return allRoutes.reduce((acc, category) => {
    return [...acc, ...category.routes];
  }, []);
};