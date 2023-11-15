import ProductImage from '@/components/molecules/ProductImage'
import { ICarouselItem } from '@/types'

import styles from './styles.module.scss'

type Props = {
    items: ICarouselItem[]
}

const Carousel = ({ items }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                {items.map((v, index) => (
                    <div className={styles['product-image']} key={index}>
                        <ProductImage item={v} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
