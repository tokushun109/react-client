import { Chip } from '@/components/elements/atoms/Chip'
import { Image } from '@/components/elements/atoms/Image'
import { ColorEnum, IThumbnail } from '@/types'
import { numToPrice } from '@/utils/convert'

import styles from './styles.module.scss'

type Props = {
    item: IThumbnail
}

const ProductThumbnail = ({ item }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['image-container']}>
                <Image src={item.apiPath} alt={item.product.name} />
                <div className={styles['chip']}>
                    <Chip color={ColorEnum.Secondary} fontSize={12}>
                        {item.product.target.name}
                    </Chip>
                </div>
            </div>
            <div className={styles['name']}>{item.product.name}</div>
            <div className={styles['price']}>
                {numToPrice(item.product.price)} <span>(税抜)</span>
            </div>
        </div>
    )
}

export default ProductThumbnail
