import Image from 'next/image'
import styles from '../styles/page.module.css'
import Nav from '../comps/nav'
import Landing from '../comps/landing'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Landing />
    </main>
  )
}
