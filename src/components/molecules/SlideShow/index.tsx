'use client'

import { ICarouselItem } from '@/types'

import { useSlideShow } from './hooks'
import styles from './styles.module.scss'
import ProductImage from '../ProductImage'

type Props = {
    items: ICarouselItem[]
}

const SlideShow = ({ items }: Props) => {
    const { displayIndex, previousDisplayIndex } = useSlideShow(items)
    return (
        <div className={styles['container']} onClick={previousDisplayIndex}>
            <div className={styles['content']}>
                <ProductImage item={items[displayIndex]} shadow={false} />
            </div>
        </div>
    )
}

export default SlideShow
