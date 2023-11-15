import classNames from 'classnames'
import Image from 'next/image'

import Chip from '@/components/atoms/Chip'
import { ColorEnum, ICarouselItem } from '@/types'

import { useProductImage } from './hooks'
import styles from './styles.module.scss'

type Props = {
    item: ICarouselItem
}

const ProductImage = async ({ item }: Props) => {
    const { src } = await useProductImage(item)

    return (
        <div className={styles['container']}>
            {item.product.category.uuid && (
                <div className={classNames(styles['chip'], styles['category'])}>
                    <Chip color={ColorEnum.Accent} fontSize={12}>
                        {item.product.category.name}
                    </Chip>
                </div>
            )}
            <Image src={src} alt={item.product.name} fill sizes="100%" style={{ objectFit: 'cover', zIndex: 0 }} />
            <div className={classNames(styles['chip'], styles['name'])}>
                <Chip color={ColorEnum.Accent} fontSize={12}>
                    {item.product.name}
                </Chip>
            </div>
        </div>
    )
}

export default ProductImage
