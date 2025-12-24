'use client';

import styles from '@/styles/Education.module.css';
import { educationList, certifications } from '@/data/education';
import { motion } from 'framer-motion';

export default function Education() {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Education
                </motion.h2>

                <div className={styles.timeline}>
                    {educationList.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            className={styles.timelineItem}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <span className={styles.period}>{edu.startDate} - {edu.endDate}</span>
                                <h3 className={styles.degree}>{edu.degree}</h3>
                                <h4 className={styles.institution}>
                                    <i className={`fas fa-${edu.icon}`} style={{ fontSize: '0.9em' }}></i> {edu.institution}
                                </h4>
                                <p className={styles.location}>{edu.location}</p>
                                {edu.grade && <div className={styles.grade}>{edu.grade}</div>}
                                {edu.description && <p className={styles.description}>{edu.description}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.certsContainer}>
                    <motion.h3
                        className={styles.subTitle}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Certifications
                    </motion.h3>
                    <div className={styles.certGrid}>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                className={styles.certCard}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                            >
                                <div className={styles.certIcon}>
                                    <i className="fas fa-certificate"></i>
                                </div>
                                <div className={styles.certContent}>
                                    <h4 className={styles.certTitle}>{cert.title}</h4>
                                    <p className={styles.issuer}>{cert.issuer} | {cert.technology}</p>
                                    {cert.link && (
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className={styles.certLink}>
                                            View Certificate <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
