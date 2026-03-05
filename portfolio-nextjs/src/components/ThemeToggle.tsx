'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styles from '@/styles/ThemeToggle.module.css';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={styles.toggleSpacer} />; // Prevent layout shift
    }

    return (
        <button
            className={styles.themeToggle}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? (
                <i className="fas fa-sun"></i>
            ) : (
                <i className="fas fa-moon"></i>
            )}
        </button>
    );
}
