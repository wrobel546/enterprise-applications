import { Link, useParams } from 'react-router-dom'

function ProductDetail({ products }) {
  const params = useParams()
  const filteredProducts = products.filter((product) => product.id === Number(params.id))

  if (filteredProducts.length === 0) {
    return null
  }

  const product = filteredProducts[0]

  return (
    <div>
      <h1>{product.title}</h1>
      category: {product.category}
      <br />
      brand: {product.brand}
      <br />
      description: {product.description}
      <br />
      price: {product.price}
      <br />
      <img src={product.thumbnail} alt={product.title} />
      <br />
      <Link to="/">Back to product list</Link>
    </div>
  )
}

export default ProductDetail
