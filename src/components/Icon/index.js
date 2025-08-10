'use client'

import styles from './index.module.scss';

export default function Icon({ children, size }) {
    return (
        <span className={styles.icon_component}>
            {children}
        </span>
    );
}