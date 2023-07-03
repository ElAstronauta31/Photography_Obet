'use client'
import { usePathname } from 'next/navigation';


export default function Background() {
    const path = usePathname();

    if (path === "/") {
        return "url('/images/bailey_hero.jpg')"
    } else {
        return "none"
    }
}