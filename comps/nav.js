'use client';
import styles from '../styles/nav.module.css'
import Link from 'next/link';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const pathname = usePathname(); 

    // useEffect(() => {
    //     const urlPath = pathname;
    //     var backStatus = document.getElementById("body").style.backgroundImage;
    //     console.log(urlPath);

    //     if (!urlPath || urlPath === "/") {
    //          backStatus = "url('/images/bailey_hero.jpg')";
    //     } else {
    //     backStatus = 'none';
    //     }

        
    // }, [pathname]);

    return (
        <div className={styles.nav}>
            <ul className={styles.navUl}>
                <Link href="/weddings"><li className={styles.navLi} >Weddings</li></Link>
                <li className={styles.navLi}>Food</li>
                <li className={styles.navLi}>Portraits</li>
            </ul>
        </div>
    )
}