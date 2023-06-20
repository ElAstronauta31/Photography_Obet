import styles from '../styles/landing.module.css'
import Image from 'next/image'

export default function Landing() {
    return (
      <div>
        <div className={styles.landingInfo}>
          <div className={styles.info}>
            <h1>Adam's Photography</h1>
            <div></div>
            <h2>1 Hour Shoot $300</h2>
            <h2>2 Hour Shoot $500</h2>
            <p>Shoot include<br/>
              5 edited images/hour
            </p>
          </div>
        </div>
        <div className={styles.reachOut}>
          <div className={styles.inquire}>
            <h2>Inquire for Events</h2>
            <h3>photographer123@example.com</h3>
          </div>
          <div className={styles.socials}>
            <Image src='/Twitter.png' alt="Twitter logo" width={50} height={50} className={styles.image}/>
            <Image src='/IG.png' alt="Instagram logo" width={50} height={50} className={styles.image}/>
  
          </div>
        </div>
      </div>
    )
  }