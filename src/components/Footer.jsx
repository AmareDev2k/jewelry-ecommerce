export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3 className="logo">Aurelia</h3>
          <p>Fine jewelry, thoughtfully made.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <p>Rings · Necklaces · Earrings · Bracelets</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>hello@aurelia-jewelry.com</p>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Aurelia Jewelry. All rights reserved.</p>
    </footer>
  )
}
