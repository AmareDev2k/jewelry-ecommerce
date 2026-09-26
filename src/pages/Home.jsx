import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { getProducts } from '../services/api.js'

export default function Home() {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    getProducts().then((products) => setFeatured(products.slice(0, 4)))
  }, [])

  return (
    <div>
      <section className="hero">
        <div className="container hero-inner">
          <h1>Timeless Pieces, Made to be Treasured</h1>
          <p>Discover handcrafted rings, necklaces, earrings and bracelets.</p>
          <Link to="/shop" className="btn">Shop the Collection</Link>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Featured Pieces</h2>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="categories container">
        <h2 className="section-title">Shop by Category</h2>
        <div className="category-grid">
          {['Rings', 'Necklaces', 'Earrings', 'Bracelets'].map((cat) => (
            <Link key={cat} to={`/shop?category=${cat}`} className="category-card">
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
