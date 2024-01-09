import { IProductThumbnail } from '@/types'

import styles from './styles.module.scss'
import ProductThumbnail from '@/components/molecules/ProductThumbnail'

type Props = {
    items: IProductThumbnail[]
}

const Carousel = ({ items }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['wrapper']}>
                {[...items, ...items].map((v, index) => (
                    <div className={styles['product-image']} key={index}>
                        <ProductThumbnail item={v} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel
