import styles from '@/styles/Experience.module.css';
import { experiences } from '@/data/experience';

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Experience</h2>
                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`${styles.timelineItem} ${index % 2 === 0 ? styles.left : styles.right}`}>
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
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
