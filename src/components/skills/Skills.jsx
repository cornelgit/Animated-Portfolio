import { useRef } from "react";
import "./skills.scss";
import skillsData from "./skillsData.js";
import { motion } from "framer-motion";
import { Line } from "rc-progress";

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
                    <h1>
                        <motion.b whileHover={{ color: "white" }}>
                            Skills
                        </motion.b>
                    </h1>
                </div>
            </motion.div>
            <motion.div className="skillContainer" variants={variants}>
                {skillsData.map((item, index) => (
                    <motion.div className="skillBox" key={index}>
                        <div className="skillBoxContent">
                            <div className="titleContainer">
                                <h3>{item.label}</h3>
                            </div>
                            <div className="skillsContainer">
                                {item.data.map((skillItem, i) => (
                                    <div className="progressbar" key={i}>
                                        <p>{skillItem.skillName}</p>
                                        <Line
                                            percent={skillItem.percentage}
                                            strokeWidth="2"
                                            strokeColor="orange"
                                            trailWidth="2"
                                            strokeLinecap="square"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Skills;
