import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="product-card group">
      <div className="product-card-inner">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <div className="product-card-body">
          <span className="product-category">{product.category}</span>
          <Link to={`/product/${product.id}`}>
            <h3>{product.name}</h3>
          </Link>
          <p className="price">${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product, 1)}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
