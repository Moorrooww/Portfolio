import "./AvailableBar.css"
import sparkle from "../assets/sparkle sparkle-1.svg"

function AvailableBar() {
  const items = ["AVAILABLE FOR WORK", "AVAILABLE FOR WORK", "AVAILABLE FOR WORK"]

  return (
    <section className="available-section">
      <div className="available-line"></div>

      <div className="available-bar">
        <div className="available-track">
          {[...items, ...items].map((text, index) => (
            <div className="available-item" key={index}>
              <span>{text}</span>
              <img src={sparkle} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="available-line"></div>
    </section>
  )
}

export default AvailableBar
