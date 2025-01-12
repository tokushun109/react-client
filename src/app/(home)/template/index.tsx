'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { Indicator } from '@/components/bases/Indicator'
import SlideShow from '@/components/composites/SlideShow'
import Carousel from '@/components/composites/Carousel'
import Section from '@/components/layouts/Section'
import { ColorEnum } from '@/types'
import { NavigationEnum } from '@/types/enum/navigation'

import styles from './styles.module.scss'
import { IThumbnail } from '@/features/product/type'

type Props = {
    carouselImages: IThumbnail[]
}

const HomeTemplate = ({ carouselImages }: Props) => {
    const router = useRouter()

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
            <Select title="title" options={[1, 2, 3].map((i) => ({ value: `value${i}`, label: `label${i}` }))}></Select>
            <Section
                title="About"
                button
                buttonLabel="詳しくはこちら"
                color={ColorEnum.Primary}
                onButtonClick={() => {
                    router.push(NavigationEnum.About)
                }}
            >
                <p>仕事や出産、育児、家事...</p>
                <p>頑張る女性の味方になりたい、</p>
                <p>
                    そんな想いで
                    <br className={styles['sm']} />
                    マクラメ編みのアクセサリーを作っています。
                </p>
            </Section>
            <Section
                title="Contact"
                button
                buttonLabel="お問い合わせフォーム"
                color={ColorEnum.Primary}
                contrast
                onButtonClick={() => {
                    router.push(NavigationEnum.Contact)
                }}
            >
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

export default HomeTemplate
