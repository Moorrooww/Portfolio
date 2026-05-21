import { Link } from "react-router-dom"
import "./MiniAbout.css"
function MiniAbout() {
  return (
    <section className="mini-about" id="about-preview">
      <h2 className="mini-about-title">À PROPOS DE MOI !</h2>

      <div className="mini-about-content">
        <div className="mini-about-character">
          <p>
            PERSONNAGE
            <br />
            À AJOUTER
            <br />
            PLUS TARD
          </p>
        </div>

        <div className="mini-about-card">
          <h3>Mauro qui ?</h3>

          <p>
            Je suis Mauro, aussi connu sous le nom de Morow. Je suis designer
            graphique, UI/UX designer et développeur web en apprentissage.
          </p>

          <p>
            J’aime créer des interfaces avec une vraie identité visuelle,
            inspirées par la musique, le motion design et les univers cartoon.
          </p>

          <Link to="/about" className="mini-about-button">
            Voir plus
          </Link>        </div>
      </div>
    </section>
  )
}

export default MiniAbout