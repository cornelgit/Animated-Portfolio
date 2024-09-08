import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
    return (
        <div>
            <section id="About">
                <Navbar />
                <Hero />
            </section>
            <section id="Skills">
                <Skills />
            </section>
            <Projects id="Projects" />
            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
};

export default App;
