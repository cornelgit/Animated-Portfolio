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
            "Engineered a user-friendly platform that enables fans to watch the most popular Yu-gi-oh Zexal episodes on-demand, free from subscription fees and intrusive advertisements.",
        url: "https://react-anime-video-player.vercel.app/",
        github: "https://github.com/cornelgit/React-Anime-Video-Player",
    },
    {
        id: 2,
        title: "Blockchain App",
        img: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "",
    },
    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.pexels.com/photos/27411756/pexels-photo-27411756/free-photo-of-oreo-milkshake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "",
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/16773548/pexels-photo-16773548/free-photo-of-youtube-music-stream-songs-and-music-videos-app-on-the-display-of-smartphone-or-tablet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        desc: "",
    },
];

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{item.title}</h2>
                        <p>{`Problem: ${item.problem}`}</p>
                        <p>{`Solution: ${item.solution}`}</p>
                        <div className="buttonContainer">
                            <button>See Demo</button>
                            <button>Source code</button>
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
