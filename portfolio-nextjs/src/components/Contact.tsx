'use client';

import styles from '@/styles/Contact.module.css';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariantsLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In Touch
                </motion.h2>
                <div className={styles.content}>
                    <motion.div
                        className={styles.contactInfo}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.h3 variants={itemVariantsLeft} className={styles.infoTitle}>Let&apos;s Talk</motion.h3>
                        <motion.p variants={itemVariantsLeft} className={styles.infoText}>
                            I&apos;m open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                        </motion.p>

                        <motion.div variants={itemVariantsLeft} className={styles.infoItem}>
                            <div className={styles.iconBox}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className={styles.infoDetails}>
                                <h4>Email</h4>
                                <a href="mailto:dineshramar.26@gmail.com">dineshramar.26@gmail.com</a>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariantsLeft} className={styles.infoItem}>
                            <div className={styles.iconBox}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className={styles.infoDetails}>
                                <h4>Location</h4>
                                <p>India</p>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariantsLeft} className={styles.socialBox}>
                            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://github.com/DineshRamaraj" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://linkedin.com/in/dineshkumar-ramaraj" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </motion.a>
                            <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://dineshramar.netlify.app" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-globe"></i>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.form
                        className={styles.form}
                        variants={itemVariantsRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Your Message" required></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message <i className="fas fa-paper-plane"></i>
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
