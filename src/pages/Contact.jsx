import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Wire this up to your real contact/email API.
    setSent(true)
  }

  return (
    <div className="container static-page">
      <h1>Contact Us</h1>
      {sent ? (
        <p>Thanks for reaching out, {form.name || 'friend'}! We'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Name
            <input name="name" required value={form.name} onChange={handleChange} />
          </label>
          <label>Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} />
          </label>
          <label>Message
            <textarea name="message" rows="5" required value={form.message} onChange={handleChange} />
          </label>
          <button type="submit" className="btn">Send Message</button>
        </form>
      )}
    </div>
  )
}
