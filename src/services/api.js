// Placeholder service layer.
// Swap this out for real API calls (e.g. to a Django REST Framework backend)
// without having to touch any component code.
import products from '../data/products.js'

export function getProducts() {
  return Promise.resolve(products)
}

export function getProductById(id) {
  const product = products.find((p) => p.id === Number(id))
  return Promise.resolve(product)
}

export function getCategories() {
  const categories = [...new Set(products.map((p) => p.category))]
  return Promise.resolve(categories)
}

// Example of what a real backend call would look like:
// export function getProducts() {
//   return fetch('/api/products/').then((res) => res.json())
// }
