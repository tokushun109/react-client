'use client'

import classNames from 'classnames'

import { IThumbnail } from '@/types'

import { useSlideShow } from './hooks'
import styles from './styles.module.scss'
import { ImageIndexEnum } from './types'
import { CarouselImage } from '../CarouselImage'

type Props = {
    items: IThumbnail[]
    size: string
    innerPadding?: number
    autoPlay?: boolean
}

const SlideShow = ({ items, size, innerPadding = 16, autoPlay = true }: Props) => {
    const { imageIndex, swipePosition, swipeDirection, setSwipePosition, clickHandler, swipeHandler } = useSlideShow(items, autoPlay)
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
                        style={{ width: `calc(${size} - ${innerPadding}px)`, aspectRatio: '1 / 1' }}
                    >
                        <CarouselImage item={items[imageIndex[v]]} shadow={false} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SlideShow
