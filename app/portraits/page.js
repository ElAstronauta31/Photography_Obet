import Image from 'next/image'
import styles from '../../styles/portraits.module.css'
import Link from 'next/link';

export default function portraits() {
    return(
        <div className={styles.gridContainerMain} id='portraits'>
            <div className={styles.gridContainerItemCenter}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/portraits/farshad-port.jpg' alt="Woman looking back over shoulder" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/portraits/igor-port.jpg' alt="Zoom in on left side of male face" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.horizontalGridItem}>
                    <Image src='/images/portraits/kelly-port.jpg' alt="man with carrying child on his shoulders" fill sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>    
            <div className={styles.gridContainerItemLeft}>
                <div className={styles.gridItemTwo}>
                    <Image src='/images/portraits/dom-port.jpg' alt="female model wearing yellow crop hoddie and sweatpants" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/portraits/jonathan-port.jpg' alt="family in grass field. Father holding baby up. Mother sitting on ground" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/portraits/stefan-port.jpg' alt="smiling woman wearing white and black pinstriped collared top photo" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.gridContainerItemRight}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/portraits/nathan-port.jpg' alt="family sitting on grass field. Father and Mother with three kids" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemThree}>
                    <Image src='/images/portraits/xavier-port.jpg' alt="photo of mother and child beside body of water" fill sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/portraits/farshad-port2.jpg' alt="female back against wall looking to the side facing camera" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.footerNav}>
                <Link href="/"><h1>Home</h1></Link>
            </div>
        </div>
    )
}