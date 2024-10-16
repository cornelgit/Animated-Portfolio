import "./projects.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Anime Video Player",
        img: "Projects/proj1.png",
        problem:
            "Many anime fans struggle to watch their favorite Yu-gi-oh Zexal episodes due to subscription fees, excessive online ads, and device limitations.",
        solution:
            "Now, there's a user-friendly platform that enables fans to watch the most popular Yu-gi-oh Zexal episodes on-demand, free from subscription fees and intrusive advertisements.",
        url: "https://react-anime-video-player.vercel.app/",
        github: "https://github.com/cornelgit/React-Anime-Video-Player",
    },
    {
        id: 2,
        title: "Crypto Dash",
        img: "Projects/proj2.png",
        problem:
            "Crypto enthusiasts often encounter challenges in accessing a single, reliable source for real-time cryptocurrency price data, detailed stats, interactive charts, and the latest news, resulting in fragmented information and missed opportunities.",
        solution:
            "Crypto Dash consolidates cryptocurrency price data, comprehensive stats, interactive charts, and up-to-date news into one intuitive app, enabling users to stay informed and make smarter trading decisions effortlessly.",
        url: "https://crypto-dash-xi.vercel.app/",
        github: "https://github.com/cornelgit/CryptoDash",
    },
    {
        id: 3,
        title: "Fox Quest - 2D Platformer Game",
        img: "Projects/proj3.png",
        problem:
            "Players of platformer games often face high costs, disruptive advertisements, and complex levels that can lead to frustration. These issues hinder their ability to enjoy the game fully.",
        solution:
            "Fox Quest offers an engaging gaming experience that is free to play with no ads. By eliminating these barriers, the game allows players to fully immerse themselves in the adventure, enhancing enjoyment and accessibility for everyone.",
        url: "https://fox-quest-the-scroll-of-adventure.vercel.app/",
        github: "https://github.com/cornelgit/FoxQuest-The-Scroll-of-Adventure",
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
                        whileHover={{ scale: 1.05 }}
                    >
                        <a href={item.url} target="_blank" rel="noreferrer">
                            <img src={item.img} alt={item.title} />
                        </a>
                    </motion.div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{item.problem}</p>
                        <p>{item.solution}</p>
                        <div className="buttonContainer">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <button>See Project</button>
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
