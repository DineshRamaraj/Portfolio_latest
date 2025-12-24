import styles from '@/styles/Projects.module.css';
import { projects } from '@/data/projects';

export default function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.icon}>
                                    {project.icon === 'robot' && <i className="fas fa-robot"></i>}
                                    {project.icon === 'shopping-cart' && <i className="fas fa-shopping-cart"></i>}
                                    {project.icon !== 'robot' && project.icon !== 'shopping-cart' && <i className="fas fa-code"></i>}
                                </div>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
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
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className={styles.tag}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
