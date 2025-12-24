import styles from '@/styles/Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Get In Touch</h2>
                <div className={styles.content}>
                    <div className={styles.contactInfo}>
                        <h3 className={styles.infoTitle}>Let's Talk</h3>
                        <p className={styles.infoText}>
                            I'm open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}>
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className={styles.infoDetails}>
                                <h4>Email</h4>
                                <a href="mailto:dineshramar.26@gmail.com">dineshramar.26@gmail.com</a>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className={styles.infoDetails}>
                                <h4>Location</h4>
                                <p>India</p>
                            </div>
                        </div>

                        <div className={styles.socialBox}>
                            <a href="https://github.com/DineshRamaraj" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://linkedin.com/in/dineshkumar-ramaraj" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://dineshramar.netlify.app" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-globe"></i>
                            </a>
                        </div>
                    </div>

                    <form className={styles.form}>
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
                        <button type="submit" className={styles.submitBtn}>
                            Send Message <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
