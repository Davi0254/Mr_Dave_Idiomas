import './index.css';
import { StrictMode } from 'react';
import { createBrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import Home from './pages/home.jsx';
import LoginPage from './loginPage.jsx';
import RegisterPage from './pages/registerPage.jsx';
import NotFoundPage from './pages/notFound.jsx';
import PrivateRoute from './components/PrivateRoute';
import USpeaKRoutes from './routes/uspeakRoutes.jsx';
import TuHablasRoutes from './routes/tuhablasRoutes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/home',
    element: <PrivateRoute><Home /></PrivateRoute>,
  },
  {
    path: '/uspeak',
    children: USpeaKRoutes,
  },
  {
    path: '/tuhablas',
    children: TuHablasRoutes,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
