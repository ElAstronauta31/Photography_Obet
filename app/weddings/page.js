import Image from 'next/image';
import styles from '../../styles/weddings.module.css';
import Link from 'next/link';

export default function Weddings() {
    return(
        <div className={styles.gridContainerMain} id='wedding'>
            <div className={styles.gridContainerItemCenter}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/galuh-wedding.jpg' alt="bride portrait" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/joeyy-wedding2.jpg' alt="bride and groom on the beach, ocean in background" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.horizontalGridItem}>
                    <Image src='/images/weddings/samantha-wedding.jpg' alt="bride and groom showing off left hands with rings on" fill sizes="(max-width: 600px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>    
            <div className={styles.gridContainerItemLeft}>
                <div className={styles.gridItemTwo}>
                    <Image src='/images/weddings/thomas-wedding.jpg' alt="bride in front of wooden church door" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/joeyy-wedding.jpg' alt="four bridesmaids wearing red facing away from camera" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/luwadlin-wedding.jpg' alt="bride and groom holding each other" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.gridContainerItemRight}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/paniz-wedding.jpg' alt="top view of right side of bride with roses" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemThree}>
                    <Image src='/images/weddings/monia-wedding.jpg' alt="bride and groom on a bride" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/weddings/elisa-wedding.jpg' alt="groom leaning bride down" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.footerNav}>
                <Link href="/"><h1>Home</h1></Link>
            </div>
        </div>
    )
}