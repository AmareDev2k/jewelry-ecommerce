import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import emailjs from '@emailjs/browser'

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', card: '' })
  const [placed, setPlaced] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service'
    const templateId = import.meta.env.VITE_EMAILJS_ORDER_TEMPLATE_ID || 'default_template'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key'

    const templateParams = {
      to_name: form.name,
      to_email: form.email,
      address: form.address,
      city: form.city,
      total: totalPrice.toFixed(2),
      order_details: items.map(i => `${i.name} (x${i.quantity})`).join(', ')
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setPlaced(true)
        setLoading(false)
        clearCart()
      })
      .catch((err) => {
        console.error('Order confirmation email failed:', err)
        setError('Your order was placed, but we could not send the confirmation email.')
        setPlaced(true) // We still place the order, just email failed.
        setLoading(false)
        clearCart()
      })
  }

  if (placed) {
    return (
      <div className="container empty-cart">
        <h1>Thank you, {form.name || 'friend'}!</h1>
        <p>Your order has been placed. A confirmation has been sent to {form.email || 'your email'}.</p>
        {error && <p style={{ color: 'red', fontStyle: 'italic', fontSize: '0.8rem', marginTop: '16px' }}>{error}</p>}
        <button className="btn" onClick={() => navigate('/shop')}>Continue Shopping</button>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="container empty-cart">
        <h1>Checkout</h1>
        <p>Your cart is empty. Add some items before checking out.</p>
      </div>
    )
  }

  return (
    <div className="container checkout-grid">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h1 className="section-title">Checkout</h1>
        <label>Full Name
          <input name="name" required value={form.name} onChange={handleChange} />
        </label>
        <label>Email
          <input type="email" name="email" required value={form.email} onChange={handleChange} />
        </label>
        <label>Address
          <input name="address" required value={form.address} onChange={handleChange} />
        </label>
        <label>City
          <input name="city" required value={form.city} onChange={handleChange} />
        </label>
        <label>Card Number
          <input name="card" required value={form.card} onChange={handleChange} placeholder="4242 4242 4242 4242" />
        </label>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Processing...' : 'Place Order'}
        </button>
      </form>

      <aside className="order-summary">
        <div className="order-summary-inner">
          <h2>Order Summary</h2>
          {items.map((item) => (
            <div key={item.id} className="order-summary-row">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="order-summary-row total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </aside>
    </div>
  )
}
