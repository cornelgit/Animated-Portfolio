import "./hero.scss";
import { animationControls, delay, motion } from "framer-motion";
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

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-200%",
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 10,
        },
    },
};

const heroPictureVariants = {
    initial: {
        opacity: 0,
        y: 75,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.25,
        },
    },
};

const Hero = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/Cornel Stoica - Resume.pdf";
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
                        Full-stack Developer
                    </motion.h1>
                    <motion.h3 variants={textVariants}>
                        As a passionate full-stack developer, I thrive on
                        transforming complex problems into elegant solutions,
                        leveraging my expertise in both front-end and back-end
                        technologies. My commitment to continuous learning and
                        collaboration drives me to create innovative,
                        user-centered applications that not only meet but exceed
                        expectations.
                    </motion.h3>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button
                            whileHover={{
                                backgroundColor: "orange",
                                color: "black",
                            }}
                            onClick={handleDownload}
                        >
                            Download Resume
                            <FontAwesomeIcon
                                icon={faDownload}
                                style={{
                                    margin: "0 8px",
                                }}
                            />
                        </motion.button>
                        <motion.button
                            whileHover={{
                                backgroundColor: "orange",
                                color: "black",
                            }}
                            onClick={handleContactClick}
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>
                    <motion.img
                        variants={textVariants}
                        animate="scrollButton"
                        src="/scroll.png"
                        alt=""
                    />
                </motion.div>
            </div>
            <motion.div
                className="slidingTextContainer"
                variants={sliderVariants}
                initial="initial"
                animate="animate"
            >
                Problem Solver
            </motion.div>
            <motion.div
                className="imageContainer"
                variants={heroPictureVariants}
                initial="initial"
                animate="animate"
            >
                <img src="/hero.png" alt="" />
            </motion.div>
        </div>
    );
};

export default Hero;
