import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <motion.div
                className="wrapper"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.25 }}
            >
                <motion.span>Portfolio</motion.span>
                <motion.div className="social">
                    <a
                        href="https://www.linkedin.com/in/cornel-stoica-9665aa120"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            src="/linkedin.png"
                            alt=""
                            whileHover={{ scale: 1.25 }}
                        />
                    </a>
                    <a
                        href="https://github.com/cornelgit"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            src="/github.svg"
                            alt=""
                            whileHover={{ scale: 1.25 }}
                        />
                    </a>
                    <a
                        href="https://www.youtube.com/@cornelxbox25"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.img
                            src="/youtube-new.png"
                            alt=""
                            whileHover={{ scale: 1.25 }}
                        />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Navbar;
