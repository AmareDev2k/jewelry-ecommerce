import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const formRef = useRef()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Ensure environment variables are set in .env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service'
    const templateId = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'default_template'
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key'

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSent(true)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Email sending failed:', err)
        setError('Failed to send message. Please ensure your EmailJS keys are configured in .env.')
        setLoading(false)
      })
  }

  return (
    <div className="container static-page">
      <h1>Contact Us</h1>
      {sent ? (
        <p>Thanks for reaching out, {form.name || 'friend'}! We'll get back to you soon.</p>
      ) : (
        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red', fontStyle: 'italic' }}>{error}</p>}
          <label>Name
            <input name="name" required value={form.name} onChange={handleChange} />
          </label>
          <label>Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} />
          </label>
          <label>Message
            <textarea name="message" rows="5" required value={form.message} onChange={handleChange} />
          </label>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  )
}
