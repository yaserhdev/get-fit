import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './pages/Error.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <Footer />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/error',
        element: <Error />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
