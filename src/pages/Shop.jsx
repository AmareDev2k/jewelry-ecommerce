import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import Loader from '../components/Loader.jsx'
import { getProducts, getCategories } from '../services/api.js'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'

  useEffect(() => {
    Promise.all([getProducts(), getCategories()]).then(([products, categories]) => {
      setProducts(products)
      setCategories(categories)
      setLoading(false)
    })
  }, [])

  const filtered =
    activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)

  const setCategory = (cat) => {
    if (cat === 'All') setSearchParams({})
    else setSearchParams({ category: cat })
  }

  if (loading) return <Loader />

  return (
    <div className="container">
      <h1 className="section-title">Shop All Jewelry</h1>
      <div className="filter-bar">
        {['All', ...categories].map((cat) => (
          <button
            key={cat}
            className={cat === activeCategory ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filtered.length === 0 && <p>No products found in this category.</p>}
    </div>
  )
}
