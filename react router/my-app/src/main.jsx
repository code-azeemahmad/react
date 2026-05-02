import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/'
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>  
  </StrictMode>,
)

// RouterProvider requires a prop
