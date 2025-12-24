'use client';

import styles from '@/styles/Skills.module.css';
import { skillCategories } from '@/data/skills';
import { motion } from 'framer-motion';

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Skills
                </motion.h2>
                <div className={styles.grid}>
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            className={styles.categoryCard}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                        >
                            <div className={styles.header}>
                                <div className={styles.iconWrapper}>
                                    <i className={`fas fa-${category.icon}`}></i>
                                </div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        className={styles.skillItem}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (skillIndex * 0.05) }}
                                    >
                                        {skill.icon && <i className={`${skill.icon} ${styles.skillIcon}`}></i>}
                                        <span>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
