import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import TechStack from "./components/TechStack"
import ProjectsSection from "./components/ProjectsSection"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTopButton from "./components/BackToTopButton"

const App = () => {


  return (
    <div className="font-inter bg-bg text-text transition-colors duration-500">
      <Header />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <AboutMe />
        <TechStack />
        <ProjectsSection />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>

  )
}

export default App