import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Expertise from "./sections/Expertise.jsx";

function App() {
    return (
        <main className="max-w-7xl mx-auto">
          <Navbar/>
           <Hero/>
           <About/>
           <Projects/>
           <Expertise/>
           <Contact/>
           <Footer/>
        </main>
    )
}

export default App
