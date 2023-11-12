import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Products from './pages/Products';

import './App.css';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  { path: '/', 
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: '/products', element: <Products />},
      { path: '/products/:productId', element: <ProductDetails /> }
    ]
  },
  {
    path: '/admin',
    
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
