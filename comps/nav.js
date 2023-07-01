import styles from '../styles/nav.module.css'
import Link from 'next/link';

export default function Nav() {

    return (
        <div className={styles.nav}>
            <ul className={styles.navUl}>
                <Link href="/weddings"><li className={styles.navLi} >Weddings</li></Link>
                <Link href="/food"><li className={styles.navLi}>Food</li></Link>
                <Link href="/portraits"><li className={styles.navLi}>Portraits</li></Link>
            </ul>
        </div>
    )
}