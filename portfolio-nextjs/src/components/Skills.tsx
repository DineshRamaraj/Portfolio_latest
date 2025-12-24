import styles from '@/styles/Skills.module.css';
import { skillCategories } from '@/data/skills';

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Skills</h2>
                <div className={styles.grid}>
                    {skillCategories.map((category) => (
                        <div key={category.id} className={styles.categoryCard}>
                            <div className={styles.header}>
                                <div className={styles.iconWrapper}>
                                    <i className={`fas fa-${category.icon}`}></i>
                                </div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        {skill.icon && <i className={`fab fa-${skill.icon} ${styles.skillIcon}`}></i>}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
