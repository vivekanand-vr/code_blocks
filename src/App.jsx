import React from "react";
import Index from './pages/Index';
import Categories from './pages/Categories';
import { getFlattenedRoutes } from './routes';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/:category',
    element: <Categories />
  },
  ...getFlattenedRoutes() // This spreads all component routes
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
