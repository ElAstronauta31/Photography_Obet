import Image from 'next/image'
import styles from '../styles/weddings.module.css'

export default function Weddings() {
    return(
        <div className={styles.grid}>
            <div className={styles.div}>
                    <Image src='/images/weddings/galuh-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
            </div>
            <div className={styles.div}>
                    <Image src='/images/weddings/joeyy-wedding2.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
            </div>
            <div className={styles.horizontalDiv}>
                <div className={styles.horizontal}>
                <Image src='/images/weddings/samantha-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.divLeft}>
                <div className={styles.div2}>
                    <Image src='/images/weddings/thomas-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.div}>
                    <Image src='/images/weddings/joeyy-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.div}>
                    <Image src='/images/weddings/luwadlin-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.divRight}>
                <div className={styles.div}>
                    <Image src='/images/weddings/paniz-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.div3}>
                    <Image src='/images/weddings/monia-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.div}>
                    <Image src='/images/weddings/elisa-wedding.jpg' fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
        </div>
    )
}