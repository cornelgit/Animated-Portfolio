import "./hero.scss";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "Resume/Cornel Stoica Resume.pdf";
        link.download = "Cornel Stoica - Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleContactClick = (event) => {
        event.preventDefault();
        const contactSection = document.getElementById("Contact");
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div
                    className="textContainer"
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>CORNEL STOICA</motion.h2>
                    <motion.h1 variants={textVariants}>
                        Software Engineer
                    </motion.h1>
                    {/* <motion.h1 variants={textVariants}>
                        Full-stack Developer
                    </motion.h1> */}
                    <motion.h3 variants={textVariants}>
                        As a passionate full-stack developer, I thrive on
                        transforming complex problems into elegant solutions,
                        leveraging my expertise in both front-end and back-end
                        technologies. <br />
                        <br />
                        My commitment to continuous learning and collaboration
                        drives me to create innovative, user-centered
                        applications that not only meet but exceed expectations.
                    </motion.h3>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button onClick={handleDownload}>
                            Download Resume
                            <FontAwesomeIcon
                                icon={faDownload}
                                className="downloadIcon"
                            />
                        </motion.button>
                        <motion.button onClick={handleContactClick}>
                            Contact Me
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
