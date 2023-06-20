import styles from '../styles/nav.module.css'

export default function Nav() {
    return (
        <div className={styles.nav}>
            <ul className={styles.navUl}>
                <li className={styles.navLi}>Weddings</li>
                <li className={styles.navLi}>Food</li>
                <li className={styles.navLi}>Portraits</li>
            </ul>
        </div>
    )
}