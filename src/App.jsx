import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";

const App = () => {
    return (
        <div>
            <Cursor />
            <section id="Homepage">
                <Navbar />
                <Hero />
            </section>
            <section id="Know">
                <Parallax type="know" />
            </section>
            <section id="Skills">
                <Skills />
            </section>
            <section id="Development">
                <Parallax type="development" />
            </section>
            <Projects id="Projects" />
            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
};

export default App;
