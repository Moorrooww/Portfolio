import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import AvailableBar from "./components/AvailableBar"
import ProjectsShowcase from "./components/ProjectsShowcase"
import MiniAbout from "./components/MiniAbout"
import Footer from "./components/Footer"
import About from "./pages/About"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AvailableBar />
      <ProjectsShowcase />
      <MiniAbout />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
    </>
  )
}

export default App
