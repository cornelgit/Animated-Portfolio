import { useRef } from "react";
import "./skills.scss";
import skillsData from "./skillsData.js";
import { motion } from "framer-motion";

const variants = {
    initial: {
        x: -500,
        y: 0,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Skills = () => {
    const ref = useRef();

    return (
        <motion.div
            className="skills"
            ref={ref}
            variants={variants}
            initial="initial"
            animate="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <p>Embracing Growth: Always Learning, Always Evolving!</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <motion.h1>Skills</motion.h1>
                </div>
            </motion.div>
            <motion.div className="skillContainer" variants={variants}>
                <div className="row">
                    {skillsData.slice(0, 8).map((item, index) => (
                        <motion.div className="skillBox" key={index}>
                            <img src={`Skills Icons/${item}.svg`} alt={item} />
                        </motion.div>
                    ))}
                </div>
                <div className="row">
                    {skillsData.slice(8).map((item, index) => (
                        <motion.div className="skillBox" key={index + 8}>
                            <img src={`Skills Icons/${item}.svg`} alt={item} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;
