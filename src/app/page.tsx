import styles from './page.module.scss'
import Image from 'next/image'

const index = () => {
    return (
        <div className={styles['container']}>
            <header className={styles['logo-area']}>
                <Image
                    src="/logo/tocoriri_logo.png"
                    alt="とこりり"
                    width={400}
                    height={200}
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </header>
            <main className={styles['carousel-area']}></main>
        </div>
    )
}

export default index
