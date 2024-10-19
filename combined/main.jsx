import { createRoot } from 'react-dom/client';
import { RouterProvider, Outlet } from 'react-router-dom';
import myRouter from './myRouter';
import Navigation from './Navigation';

createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRouter}>
    <Navigation />
    <Outlet />
  </RouterProvider>
);