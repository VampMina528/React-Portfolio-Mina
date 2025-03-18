import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-router-client'
import App from './App.jsx';
import '.index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './components/aboutme.jsx';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Resume from './components/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/AboutMe',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

