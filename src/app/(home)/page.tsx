import Image from 'next/image'

import Section from '@/components/templates/Section'

import styles from './page.module.scss'

const Home = async () => {
    // apiの取得例
    // const { carouselImages } = await useHome()

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
            <Section title="About" buttonLabel="詳しくはこちら">
                <p>仕事や出産、育児、家事...</p>
                <p>頑張る女性の味方になりたい、</p>
                <p>
                    そんな想いで
                    <br className={styles['sm']} />
                    マクラメ編みのアクセサリーを作っています。
                </p>
            </Section>
            <Section title="Contact" buttonLabel="お問い合わせフォーム" contrast>
                <p>お問い合わせ・ご意見・ご相談はこちらから</p>
            </Section>
            <div className={styles['border']} />
        </div>
    )
}

export default Home
