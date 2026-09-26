import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../services/api.js'
import { useCart } from '../context/CartContext.jsx'
import Loader from '../components/Loader.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    setAdded(false)
    getProductById(id).then(setProduct)
  }, [id])

  if (!product) return <Loader />

  const handleAdd = () => {
    addToCart(product, quantity)
    setAdded(true)
  }

  return (
    <div className="container product-detail">
      <Link to="/shop" className="back-link">&larr; Back to Shop</Link>
      <div className="product-detail-grid">
        <img src={product.image} alt={product.name} />
        <div>
          <span className="product-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="price">${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          <p className="stock">{product.stock} in stock</p>

          <div className="quantity-row">
            <label htmlFor="qty">Quantity</label>
            <input
              id="qty"
              type="number"
              min="1"
              max={product.stock}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
            />
          </div>

          <button className="btn" onClick={handleAdd}>Add to Cart</button>
          {added && <p className="confirm-msg">Added to cart!</p>}
        </div>
      </div>
    </div>
  )
}
