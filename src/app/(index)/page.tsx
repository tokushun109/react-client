import styles from './page.module.scss'
import Image from 'next/image'

const index = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['logo-area']}>
                <h1>
                    <Image
                        src="/logo/tocoriri_logo.png"
                        alt="とこりり"
                        width={400}
                        height={200}
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </h1>
            </div>
            <div className={styles['carousel-area']}></div>
        </div>
    )
}

export default index
