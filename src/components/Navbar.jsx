import { useEffect, useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="navbar">
      {!scrolled ? (
        <div className="navbar-normal">
          <div className="logo">M✦WWW</div>

          <div className="nav-links">
            <a href="#home">Accueil</a>
            <a href="#projects">Projects</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      ) : (
        <div className="navbar-pill">
          <div className="eye">
            <div className="pupil"></div>
          </div>

          <div className="eye">
            <div className="pupil"></div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar