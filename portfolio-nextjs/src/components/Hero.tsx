'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const typedText = useTypingEffect('Dineshkumar R', 150);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.particles}></div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={`${styles.greeting} ${styles.fadeIn}`}>Hello, I&apos;m</p>
            <h1 className={`${styles.heroTitle} ${styles.fadeInUp}`}>
              <span className={styles.typingText}>{typedText}</span>
              <span className={styles.cursor}>|</span>
            </h1>
            <h2 className={`${styles.heroSubtitle} ${styles.fadeInUp} ${styles.delay1}`}>
              Full Stack Developer (MERN Stack)
            </h2>
            <p className={`${styles.heroDescription} ${styles.fadeInUp} ${styles.delay2}`}>
              Passionate about building scalable web applications with modern technologies.
              Specialized in React.js, Node.js, Express.js, and MongoDB.
            </p>
            <div className={`${styles.heroCta} ${styles.fadeInUp} ${styles.delay3}`}>
              <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                <i className="fas fa-code"></i> View My Work
              </a>
              <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                <i className="fas fa-envelope"></i> Get in Touch
              </a>
            </div>
            <div className={`${styles.socialLinks} ${styles.fadeIn} ${styles.delay4}`}>
              <a
                href="https://github.com/DineshRamaraj"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/dineshkumar-ramaraj"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://dineshramar.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <i className="fas fa-globe"></i>
              </a>
              <a href="mailto:dineshramar.26@gmail.com" className={styles.socialLink}>
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className={`${styles.heroImage} ${styles.fadeIn} ${styles.delay2}`}>
            <div className={styles.imageWrapper}>
              <div className={styles.glowEffect}></div>
              <div className={`${styles.floatingIcon} ${styles.icon1}`}>
                <i className="fab fa-react"></i>
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon2}`}>
                <i className="fab fa-node-js"></i>
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon3}`}>
                <i className="fab fa-js"></i>
              </div>
              <div className={`${styles.floatingIcon} ${styles.icon4}`}>
                <i className="fas fa-database"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}
