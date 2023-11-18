'use client'

import classNames from 'classnames'

import { ICarouselItem } from '@/types'

import { useSlideShow } from './hooks'
import styles from './styles.module.scss'
import { ImageIndexEnum } from './types'
import ProductImage from '../ProductImage'

type Props = {
    items: ICarouselItem[]
    size: string
    innerPadding?: number
}

const SlideShow = ({ items, size, innerPadding = 16 }: Props) => {
    const { imageIndex, swipePosition, swipeDirection, setSwipePosition, clickHandler, swipeHandler } = useSlideShow(items)
    return (
        <div
            className={styles['container']}
            onClick={clickHandler}
            onTouchStart={(e) => {
                setSwipePosition({ ...swipePosition, start: e.touches[0].pageX })
            }}
            onTouchMove={(e) => {
                setSwipePosition({ ...swipePosition, end: e.touches[0].pageX })
            }}
            onTouchEnd={swipeHandler}
            style={{ width: `calc(${size})`, height: `calc(${size})` }}
        >
            <div className={styles['wrapper']}>
                {Object.values(ImageIndexEnum).map((v) => (
                    <div
                        key={v}
                        className={classNames(styles['content'], styles[v], swipeDirection && styles[`${swipeDirection}-swipe`])}
                        style={{ width: `calc(${size} - ${innerPadding}px)`, height: `calc(${size} - ${innerPadding}px)` }}
                    >
                        <ProductImage item={items[imageIndex[v]]} shadow={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SlideShow
