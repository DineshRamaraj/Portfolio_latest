'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';
import styles from '@/styles/Hero.module.css';
import { motion } from 'framer-motion';

export default function Hero() {
  const typedText = useTypingEffect('Dineshkumar R', 150);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.particles}></div>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroText}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className={styles.greeting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className={styles.typingText}>{typedText}</span>
              <span className={styles.cursor}>|</span>
            </motion.h1>
            <motion.h2
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Full Stack Developer (MERN Stack)
            </motion.h2>
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Passionate about building scalable web applications with modern technologies.
              Specialized in React.js, Node.js, Express.js, and MongoDB.
            </motion.p>
            <motion.div
              className={styles.heroCta}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
                <i className="fas fa-code"></i> View My Work
              </a>
              <a href="#contact" className={`${styles.btn} ${styles.btnSecondary}`}>
                <i className="fas fa-envelope"></i> Get in Touch
              </a>
            </motion.div>
            <motion.div
              className={styles.socialLinks}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <a href="https://github.com/DineshRamaraj" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/dineshkumar-ramaraj" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://dineshramar.netlify.app" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <i className="fas fa-globe"></i>
              </a>
              <a href="mailto:dineshramar.26@gmail.com" className={styles.socialLink}>
                <i className="fas fa-envelope"></i>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.heroImage}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.glowEffect}></div>
              {[
                { icon: 'fa-react', className: styles.icon1 },
                { icon: 'fa-node-js', className: styles.icon2 },
                { icon: 'fa-js', className: styles.icon3 },
                { icon: 'fa-database', className: styles.icon4 }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`${styles.floatingIcon} ${item.className}`}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <i className={`fab ${item.icon} ${item.icon === 'fa-database' ? 'fas' : ''}`}></i>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll Down</p>
      </motion.div>
    </section>
  );
}
