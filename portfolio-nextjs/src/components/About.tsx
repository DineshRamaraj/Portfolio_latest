'use client';

import styles from '@/styles/About.module.css';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};
export default function About() {
    return (
        <section id="about" className={styles.about}>
            <motion.div
                className={styles.container}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <motion.h2 variants={itemVariants} className={styles.sectionTitle}>About Me</motion.h2>
                <div className={styles.content}>
                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        {/* Placeholder for profile image */}
                        <div className={styles.placeholderImage}>
                            <i className="fas fa-user"></i>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.textContainer}>
                        <p>
                            I am a passionate Full Stack Developer with specialized expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js).
                            With a strong foundation in computer applications and hands-on experience in building scalable web applications,
                            I love solving complex problems and creating intuitive user experiences.
                        </p>
                        <p>
                            Currently working as a Full Stack Developer at Markteer Media, I engineer RESTful APIs and optimize frontend performance.
                            I am also deeply interested in AI agents and automation, constantly learning new technologies to stay ahead in the tech landscape.
                        </p>
                        <motion.div
                            className={styles.infoGrid}
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants} className={styles.infoItem}>
                                <span className={styles.label}>Name:</span>
                                <span className={styles.value}>Dineshkumar R</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className={styles.infoItem}>
                                <span className={styles.label}>Email:</span>
                                <span className={styles.value}>dineshramar.26@gmail.com</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className={styles.infoItem}>
                                <span className={styles.label}>Role:</span>
                                <span className={styles.value}>Full Stack Developer</span>
                            </motion.div>
                            <motion.div variants={itemVariants} className={styles.infoItem}>
                                <span className={styles.label}>Location:</span>
                                <span className={styles.value}>India</span>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
