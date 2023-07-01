import Image from 'next/image';
import styles from '../../styles/food.module.css';
import Link from 'next/link';

export default function Food() {
    return(
        <div className={styles.gridContainerMain} id='food'>
            <div className={styles.gridContainerItemCenter}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/food/cala-food.jpg' alt="two bowls of an orange colored soup" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/food/brooke-food2.jpg' alt="bowl of brocoli soup" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.horizontalGridItem}>
                    <Image src='/images/food/ben-food.jpg' alt="bowl of yogurt parfait on cutting board "fill sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>    
            <div className={styles.gridContainerItemLeft}>
                <div className={styles.gridItemTwo}>
                    <Image src='/images/food/pablo-food.jpg' alt="a hamburger in an exploded view" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemThree}>
                    <Image src='/images/food/vita-food.jpg' alt="asian style noddle stir fry" fill sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/food/brooke-food.jpg' alt="bowl of figs, cheese, ham, boiled eggs" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.gridContainerItemRight}>
                <div className={styles.gridItemOne}>
                    <Image src='/images/food/emile-food.jpg' alt="fresh assortment of vegetables " fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemThree}>
                    <Image src='/images/food/wantto-food.jpg' alt="churros" fill sizes="(max-width: 600px) 100vw, (max-width: 600px) 50vw, 33vw" className={styles.img}/>
                </div>
                <div className={styles.gridItemOne}>
                    <Image src='/images/food/victoria-food.jpg' alt="kabobs fresh off the grill" fill sizes="(max-width: 300px) 100vw, (max-width: 300px) 50vw, 33vw" className={styles.img}/>
                </div>
            </div>
            <div className={styles.footerNav}>
                <Link href="/"><h1>Home</h1></Link>
            </div>
        </div>
    )
}