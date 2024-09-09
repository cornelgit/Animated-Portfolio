import "./projects.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Anime Video Player",
        img: "Projects/project1.png",
        problem:
            "Many anime fans struggle to watch their favorite Yu-gi-oh Zexal episodes due to subscription fees, excessive online ads, and device limitations.",
        solution:
            "Now, there's a user-friendly platform that enables fans to watch the most popular Yu-gi-oh Zexal episodes on-demand, free from subscription fees and intrusive advertisements.",
        url: "https://react-anime-video-player.vercel.app/",
        github: "https://github.com/cornelgit/React-Anime-Video-Player",
    },
    {
        id: 2,
        title: "Anime Video Player",
        img: "Projects/project1.png",
        problem:
            "Watching Yu-gi-oh Zexal episodes online can be a frustrating experience. Many websites offer low-quality streams or require navigating through intrusive ads.",
        solution:
            "My video player provides a seamless, high-quality viewing experience for all your favorite Yu-gi-oh Zexal episodes. Enjoy the show without distractions or compromises.",
        url: "https://react-anime-video-player.vercel.app/",
        github: "https://github.com/cornelgit/React-Anime-Video-Player",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <motion.div
                        className="imageContainer"
                        ref={ref}
                        whileHover={{ scale: 1.1 }}
                    >
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <img src={item.img} alt="" />
                        </a>
                    </motion.div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.problem}</p>
                        <p>{item.solution}</p>
                        <div className="buttonContainer">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <button>Watch Now</button>
                            </a>
                            <a
                                href={item.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <button>Source Code</button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Projects = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="projects" ref={ref} id="Projects">
            <div className="progress">
                <h1>Projects</h1>
                <motion.div
                    className="progressBar"
                    style={{ scaleX }}
                ></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}></Single>
            ))}
        </div>
    );
};

export default Projects;
