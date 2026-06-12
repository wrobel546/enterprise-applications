import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ProductDetail from './ProductDetail.jsx'
import ProductList from './ProductList.jsx'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products)
      })
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProductList products={products} />,
    },
    {
      path: 'details/:id',
      element: <ProductDetail products={products} />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
