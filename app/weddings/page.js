import Image from 'next/image'
import styles from '../../styles/weddings.module.css'

export default function Weddings() {
    return(
        <div className={styles.gridContainerMain} id='wedding'>
            <div className={styles.gridContainerItemCenter}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/galuh-wedding.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/joeyy-wedding2.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.horizontalGridItem}>
                    <Image src='/images/weddings/samantha-wedding.jpg' fill sizes="(max-width: 600px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>    
            <div className={styles.gridContainerItemLeft}>
                <div className={styles.gridItemTwo}>
                    <Image src='/images/weddings/thomas-wedding.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/joeyy-wedding.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/luwadlin-wedding.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.gridContainerItemRight}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/paniz-wedding.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemThree}>
                    <Image src='/images/weddings/monia-wedding.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/elisa-wedding.jpg' fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
        </div>
    )
}