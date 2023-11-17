'use client'

import classNames from 'classnames'

import { ICarouselItem } from '@/types'

import { useSlideShow } from './hooks'
import styles from './styles.module.scss'
import ProductImage from '../ProductImage'

type Props = {
    items: ICarouselItem[]
}

const SlideShow = ({ items }: Props) => {
    const { displayIndex, swipePosition, setSwipePosition, nextDisplayIndex, swipeHandler } = useSlideShow(items)
    return (
        <div
            className={classNames(styles['container'])}
            onClick={nextDisplayIndex}
            onTouchStart={(e) => {
                setSwipePosition({ ...swipePosition, start: e.touches[0].pageX })
            }}
            onTouchMove={(e) => {
                setSwipePosition({ ...swipePosition, end: e.touches[0].pageX })
            }}
            onTouchEnd={swipeHandler}
        >
            <div className={styles['content']}>
                <ProductImage item={items[displayIndex]} shadow={false} />
            </div>
        </div>
    )
}

export default SlideShow
