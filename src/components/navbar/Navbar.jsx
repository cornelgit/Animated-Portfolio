import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Portfolio
                </motion.span>
                <div className="social">
                    <a href="#">
                        <motion.img
                            src="/linkedin.png"
                            alt=""
                            whileHover={{ scale: 1.25 }}
                        />
                        <motion.img
                            src="/github.svg"
                            alt=""
                            whileHover={{ scale: 1.25 }}
                        />
                        <motion.img
                            src="/youtube-new.png"
                            alt=""
                            whileHover={{ scale: 1.25 }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
