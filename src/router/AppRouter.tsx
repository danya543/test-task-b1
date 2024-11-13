import { CharacterPage } from '@pages/CharacterPage/CharacterPage';
import { ErrorPage } from '@pages/ErrorPage/ErrorPage';
import { FavoritiesPage } from '@pages/FavoritiesPage/FavoritiesPage';
import { MainLayout } from '@pages/MainLayout/MainLayout';
import { MainPage } from '@pages/MainPage/MainPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const routerSchema = createBrowserRouter([
  {
    Component: MainLayout,
    path: '/',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/:id',
        element: <CharacterPage />,
      },
      {
        path: '/favorities',
        element: <FavoritiesPage />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export const AppRouter = () => <RouterProvider router={routerSchema} />;
