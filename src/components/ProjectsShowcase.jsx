import { useEffect, useState } from "react"
import "./ProjectsShowcase.css"

function ProjectsShowcase() {
  const projects = [
    { title: "BOBARD", image: "/projects/bobard.png", link: "#bobard" },
    { title: "LOOM", image: "/projects/loom.png", link: "#loom" },
    { title: "DELTA", image: "/projects/delta.png", link: "#delta" },
    { title: "CLIM", image: "/projects/clim.png", link: "#clim" },
    { title: "HAMISH", image: "/projects/hamish.png", link: "#hamish" },
    {
        title: "SOON",
        image: "/projects/soon.png",
        link: "#soon",
      },
  ]

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const section = document.querySelector(".projects-showcase")
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollableHeight = section.offsetHeight - window.innerHeight
      const progress = Math.min(Math.max(-rect.top / scrollableHeight, 0), 1)

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const carouselProgress = scrollProgress * (projects.length - 1)

  return (
    <section className="projects-showcase" id="projects">
      <div className="projects-sticky">
        <div className="carousel-orbit">
          {projects.map((project, index) => {
            const offset = index - carouselProgress
            const angle = offset * 60

            const distanceFromFront = Math.abs(offset)
            const opacity = 1
            const zIndex = 10

            return (
              <a
                href={project.link}
                className="orbit-card"
                key={project.title}
                style={{
                  "--angle": `${angle}deg`,
                  opacity,
                  zIndex,
                }}
              >
                <img src={project.image} alt={project.title} />
              </a>
            )
          })}

        <img
         src="/projects/thinking-character.png"
         alt="Personnage qui réfléchit"
         className="thinking-character"
       />
      </div>

        {projects.map((project, index) => {
          const projectProgress = carouselProgress - index
          const titleY = projectProgress * 100

          return (
            <div
              className="project-main-content"
              key={project.title}
              style={{
                transform: `translate(-50%, ${titleY}vh)`,
                opacity: Math.abs(projectProgress) < 0.85 ? 1 : 0,
              }}
            >
              <h2 className="project-main-title">{project.title}</h2>

              <a href={project.link} className="project-main-button">
                watch movies
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsShowcase