import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; 2024 Dineshkumar R. Built with <i className="fas fa-heart"></i> and{' '}
          <i className="fas fa-coffee"></i>
        </p>
      </div>
    </footer>
  );
}
