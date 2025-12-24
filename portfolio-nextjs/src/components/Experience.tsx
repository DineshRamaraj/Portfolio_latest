'use client';

import styles from '@/styles/Experience.module.css';
import { experiences } from '@/data/experience';
import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                </motion.h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className={styles.content}>
                                <div className={styles.date}>{exp.startDate} - {exp.endDate}</div>
                                <h3 className={styles.title}>{exp.title}</h3>
                                <h4 className={styles.company}>{exp.company}</h4>
                                <ul className={styles.responsibilities}>
                                    {exp.responsibilities.map((resp, i) => (
                                        <li key={i}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
