import "./Hero.css"
import heroPerso from "../assets/Heroperso.svg"
import sparkle1 from "../assets/sparkle sparkle-1.svg"
import sparkle2 from "../assets/sparkle sparkle-2.svg"
import sparkle3 from "../assets/sparkle sparkle-3.svg"

function Hero() {
  return (
    <section className="hero" id="home">

      <img src={sparkle1} alt="" className="sparkle sparkle-1" />
      <img src={sparkle2} alt="" className="sparkle sparkle-2" />
      <img src={sparkle3} alt="" className="sparkle sparkle-3" />

      <div className="hero-content">

<div className="hero-title-row">
  <h1 className="hero-title">PORTF</h1>

  <img
    src={heroPerso}
    alt="Personnage portfolio"
    className="hero-img"
  />

  <h1 className="hero-title">LIO</h1>
</div>

<div className="hero-badges">
  <span>Développeur web</span>
  <span>Designer UI/UX</span>
</div>

</div>

    </section>
  )
}

export default Hero