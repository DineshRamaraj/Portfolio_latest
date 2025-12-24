import styles from '@/styles/About.module.css';


export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        {/* Placeholder for profile image */}
                        <div className={styles.placeholderImage}>
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <p>
                            I am a passionate Full Stack Developer with specialized expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js).
                            With a strong foundation in computer applications and hands-on experience in building scalable web applications,
                            I love solving complex problems and creating intuitive user experiences.
                        </p>
                        <p>
                            Currently working as a Full Stack Developer at Markteer Media, I engineer RESTful APIs and optimize frontend performance.
                            I am also deeply interested in AI agents and automation, constantly learning new technologies to stay ahead in the tech landscape.
                        </p>
                        <div className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <span className={styles.label}>Name:</span>
                                <span className={styles.value}>Dineshkumar R</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.label}>Email:</span>
                                <span className={styles.value}>dineshramar.26@gmail.com</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.label}>Role:</span>
                                <span className={styles.value}>Full Stack Developer</span>
                            </div>
                            <div className={styles.infoItem}>
                                <span className={styles.label}>Location:</span>
                                <span className={styles.value}>India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
