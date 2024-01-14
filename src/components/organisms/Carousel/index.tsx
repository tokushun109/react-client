import HomeThumbnail from '@/components/molecules/HomeThumbnail'
import { IThumbnail } from '@/types'

import styles from './styles.module.scss'

type Props = {
    items: IThumbnail[]
}

const Carousel = ({ items }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                {[...items, ...items].map((v, index) => (
                    <div className={styles['product-image']} key={index}>
                        <HomeThumbnail item={v} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
