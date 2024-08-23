import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
    const [open, setOpen] = useState(false);

    // const variants = {
    //     visible: {
    //         opacity: 1,
    //         x: 500,
    //         transition: { type: "spring", stiffness: 100, damping: 100 },
    //     },
    //     hidden: { opacity: 0 },
    // };

    const items = ["item1", "item2", "item3", "item4"];

    // We can also take/use a variable to make some calculations
    const variants = {
        visible: (i) => ({
            opacity: 1,
            x: 100,
            transition: { delay: i * 0.3 },
        }),
        hidden: { opacity: 0 },
    };

    return (
        <div className="course">
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item, i) => (
                    <motion.li variants={variants} key={item} custom={i}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>
            {/* <motion.div
                className="box"
                // Without variants
                //initial={{ opacity: 0.5, scale: 0.5 }}
                //transition={{ duration: 2 }}
                //whileHover={{ opacity: 1, scale: 2 }}
                //whileInView={{ opacity: 1, scale: 2 }}
                //drag

                // With variants
                //initial="hidden"
                //animate="visible"
                variants={variants}
                animate={open ? "visible" : "hidden"}
                transition={{ duration: 2 }}
            ></motion.div>
            <button onClick={() => setOpen((prev) => !prev)}>Click</button> */}
        </div>
    );
};

export default Test;
