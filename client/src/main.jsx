import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Footer from './components/Footer'; // Import the Footer component
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <Footer /> {/* Include the Footer component */}
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/error',
        element: <Error />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
