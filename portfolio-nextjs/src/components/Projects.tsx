'use client';

import styles from '@/styles/Projects.module.css';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h2>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.icon}>
                                    {project.icon === 'robot' && <i className="fas fa-robot"></i>}
                                    {project.icon === 'shopping-cart' && <i className="fas fa-shopping-cart"></i>}
                                    {project.icon !== 'robot' && project.icon !== 'shopping-cart' && <i className="fas fa-code"></i>}
                                </div>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} aria-label={`View ${project.title} live`}>
                                        <i className="fas fa-external-link-alt"></i>
                                    </a>
                                )}
                            </div>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <ul className={styles.highlights}>
                                {project.highlights.slice(0, 2).map((highlight, index) => (
                                    <li key={index}>{highlight}</li>
                                ))}
                            </ul>
                            <div className={styles.tags}>
                                {project.technologies.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className={styles.tag}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: (index * 0.1) + 0.3 + (techIndex * 0.05), type: "spring" }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
