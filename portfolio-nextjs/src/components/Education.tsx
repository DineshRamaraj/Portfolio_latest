import styles from '@/styles/Education.module.css';
import { educationList, certifications } from '@/data/education';

export default function Education() {
    return (
        <section id="education" className={styles.education}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Education</h2>

                <div className={styles.eduGrid}>
                    {educationList.map((edu) => (
                        <div key={edu.id} className={styles.eduCard}>
                            <div className={styles.iconCircle}>
                                <i className={`fas fa-${edu.icon}`}></i>
                            </div>
                            <div className={styles.eduContent}>
                                <span className={styles.year}>{edu.startDate} - {edu.endDate}</span>
                                <h3 className={styles.degree}>{edu.degree}</h3>
                                <h4 className={styles.institution}>{edu.institution}</h4>
                                <p className={styles.location}>{edu.location}</p>
                                {edu.grade && <span className={styles.grade}>{edu.grade}</span>}
                                {edu.description && <p className={styles.description}>{edu.description}</p>}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.certsContainer}>
                    <h3 className={styles.subTitle}>Certifications</h3>
                    <div className={styles.certGrid}>
                        {certifications.map((cert) => (
                            <div key={cert.id} className={styles.certCard}>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
