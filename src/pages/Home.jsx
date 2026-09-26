import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import { getProducts } from '../services/api.js'

export default function Home() {
  const [featured, setFeatured] = useState([])

  useEffect(() => {
    getProducts().then((products) => setFeatured(products.slice(0, 4)))
  }, [])

  return (
    <div>
      <section className="hero container">
        <div className="hero-inner editorial-split">
          <div className="editorial-content">
            <span className="eyebrow-tag">Collection 01</span>
            <h1>Masterfully crafted ornaments for the modern collector.</h1>
            <p>Archival quality pieces cast in solid gold and set with ethically sourced stones. Designed to exist beyond seasons.</p>
            <Link to="/shop" className="btn">Explore the Archive</Link>
          </div>
          <div className="editorial-media">
            <div className="media-frame double-bezel-hero">
              <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=800&q=80" alt="Editorial Jewelry" />
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal>
        <section className="container">
          <h2 className="section-title">Featured Pieces</h2>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
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
      </ScrollReveal>
    </div>
  )
}
