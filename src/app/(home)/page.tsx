import classNames from 'classnames'
import { Metadata } from 'next'
import Image from 'next/image'

import { getCreator } from '@/apis/creator'
import { getCarouselImages } from '@/apis/product'
import Indicator from '@/components/atoms/Indicator'
import SlideShow from '@/components/molecules/SlideShow'
import Carousel from '@/components/templates/Carousel'
import Section from '@/components/templates/Section'
import { ColorEnum } from '@/types'

import styles from './page.module.scss'

export async function generateMetadata(): Promise<Metadata> {
    const title = 'アクセサリーショップ とこりり'
    const creator = await getCreator()
    const description =
        creator && creator.introduction ? creator.introduction : 'とこりりはハンドメイドのマクラメ編みアクセサリーを制作・販売しているお店です。'
    const image = creator && creator.apiPath ? creator.apiPath : ''
    return {
        metadataBase: new URL(process.env.DOMAIN_URL || ''),
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            images: [image],
        },
        twitter: {
            title,
            description,
            images: [image],
        },
    }
}

const Home = async () => {
    const carouselImages = await getCarouselImages()
    return (
        <div className={styles['container']}>
            <div className={classNames(styles['logo-area'], styles['default'])}>
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
            <div className={classNames(styles['carousel-area'], styles['default'])}>
                <Carousel items={carouselImages} />
            </div>
            <div className={classNames(styles['slide-show-area'], styles['sm'])}>
                <SlideShow items={carouselImages} size="90vw" />
            </div>
            <Section title="About" button buttonLabel="詳しくはこちら" color={ColorEnum.Primary} onClick={() => {}}>
                <p>仕事や出産、育児、家事...</p>
                <p>頑張る女性の味方になりたい、</p>
                <p>
                    そんな想いで
                    <br className={styles['sm']} />
                    マクラメ編みのアクセサリーを作っています。
                </p>
            </Section>
            <Section title="Contact" button buttonLabel="お問い合わせフォーム" color={ColorEnum.Primary} contrast onClick={() => {}}>
                <p>お問い合わせ・ご意見・ご相談はこちらから</p>
            </Section>
            <div className={styles['border']} />
            <span className={styles['indicator']}>
                <Indicator>
                    Scroll<span className={styles['arrow']}>→</span>
                </Indicator>
            </span>
        </div>
    )
}

export default Home
