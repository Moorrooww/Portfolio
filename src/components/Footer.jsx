import "./Footer.css"

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-top-line"></div>

        <div className="footer-nav">
          <div className="footer-links footer-links-left">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:tonmail@gmail.com">Mail</a>
          </div>

          <a href="#home" className="footer-back">
            Retour en haut
          </a>

          <div className="footer-links footer-links-right">
            <a href="#projects">Projets</a>
            <a href="#about-preview">À propos</a>
            <a href="#contact">Contact</a>
            <a href="/about">About page</a>
          </div>
        </div>

                <div className="footer-contact-band">
          <div className="footer-contact-track">
            <span>PRENONS CONTACT</span>
            <span>PRENONS CONTACT</span>
            <span>PRENONS CONTACT</span>
            <span>PRENONS CONTACT</span>
          </div>
        </div>
        <p className="footer-copy">Tout droits réserver</p>
      </div>
    </footer>
  )
}

export default Footer