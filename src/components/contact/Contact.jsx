import "./contact.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
    initial: {
        y: 50,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const textInputVariants = {
    initial: {
        borderColor: "#FFF",
    },
    focused: {
        borderColor: "#FFA500",
    },
};

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target;
        setIsSubmitting(true);
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            )
            .then(
                (result) => {
                    setSuccess(true);
                },
                (error) => {
                    setError(true);
                }
            )
            .finally(() => {
                setIsSubmitting(false);
                setIsButtonClicked(true);
                form.name.value = "";
                form.email.value = "";
                form.message.value = "";
            });
    };

    return (
        <motion.div
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate"
        >
            <motion.div className="textContainer" variants={variants}>
                <div className="titleContainer">
                    <motion.h1 variants={variants}>Contact Me</motion.h1>
                </div>
                <div className="formContainer">
                    <motion.div
                        className="phoneSvg"
                        initial={{ opacity: 1 }}
                        whileInView={{ opacity: 0 }}
                        transition={{ delay: 3, duration: 1 }}
                    ></motion.div>
                    <motion.form
                        onSubmit={sendEmail}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <motion.input
                            type="text"
                            required
                            placeholder="Name"
                            name="name"
                            variants={textInputVariants}
                            initial="initial"
                            whileFocus="focused"
                            transition={{ duration: 0.2 }}
                            style={{
                                outline: "none",
                            }}
                        />
                        <motion.input
                            type="email"
                            required
                            placeholder="Email"
                            name="email"
                            variants={textInputVariants}
                            initial="initial"
                            whileFocus="focused"
                            transition={{ duration: 0.2 }}
                            style={{
                                outline: "none",
                            }}
                        />
                        <motion.textarea
                            rows={8}
                            placeholder="Message"
                            name="message"
                            variants={textInputVariants}
                            initial="initial"
                            whileFocus="focused"
                            transition={{ duration: 0.2 }}
                            style={{
                                outline: "none",
                            }}
                        />
                        <button type="submit" disabled={isButtonClicked}>
                            {isSubmitting ? (
                                <motion.div
                                    className="loading"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                    }}
                                />
                            ) : success ? (
                                <span style={{ color: "green" }}>✔</span>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </motion.form>
                    {error && (
                        <div className="email-result-container">
                            <p className="error">
                                Error sending email. Please try again.
                            </p>
                        </div>
                    )}
                    {success && (
                        <div className="email-result-container">
                            <p className="success">Email sent successfully!</p>
                        </div>
                    )}
                </div>
            </motion.div>
            <footer className="footer">
                <div className="footerContainer">
                    <p>
                        &copy; {new Date().getFullYear()} Cornel Stoica. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </motion.div>
    );
};

export default Contact;
