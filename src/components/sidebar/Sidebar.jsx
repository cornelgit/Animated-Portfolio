import "./sidebar.scss";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
    open: {
        clipPath: "circle(1200px at 50px 50px)",
        transition: {
            type: "spring",
            stiffness: 20,
        },
    },
    closed: {
        clipPath: "circle(30px at 50px 50px)",
        transition: {
            delay: 0.25,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target)
            ) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <motion.div
            className="sidebar"
            ref={sidebarRef}
            animate={open ? "open" : "closed"}
        >
            <motion.div
                className="bg"
                variants={variants}
                initial={{ display: "none" }}
                animate={{ display: "flex" }}
            >
                <Links />
            </motion.div>
            <ToggleButton open={open} setOpen={setOpen} />
        </motion.div>
    );
};

export default Sidebar;
