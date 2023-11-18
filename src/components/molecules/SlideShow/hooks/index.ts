import { setTimeout } from 'timers'

import { useState } from 'react'

import { ICarouselItem } from '@/types'

import { ImageIndex, SwipeDirection, SwipePosition } from '../types'

export const useSlideShow = (items: ICarouselItem[]) => {
    // 商品画像の数
    const maxLength = items.length

    const [imageIndex, setImageIndex] = useState<ImageIndex>({ previous: maxLength - 1, display: 0, next: 1 })
    const [swipePosition, setSwipePosition] = useState<SwipePosition>({ start: undefined, end: undefined })
    const [swipeDirection, setSwipeDirection] = useState<SwipeDirection | undefined>(undefined)

    // 次の画像を表示する
    const nextDisplayIndex = () => {
        setImageIndex({
            previous: imageIndex.previous !== maxLength - 1 ? imageIndex.previous + 1 : 0,
            display: imageIndex.display !== maxLength - 1 ? imageIndex.display + 1 : 0,
            next: imageIndex.next !== maxLength - 1 ? imageIndex.next + 1 : 0,
        })
    }

    // 前の画像を表示する
    const previousDisplayIndex = () => {
        setImageIndex({
            previous: imageIndex.previous !== 0 ? imageIndex.previous - 1 : maxLength - 1,
            display: imageIndex.display !== 0 ? imageIndex.display - 1 : maxLength - 1,
            next: imageIndex.next !== 0 ? imageIndex.next - 1 : maxLength - 1,
        })
    }

    // TODO スライドはできるようになったので、動き方を調整する(domが消える時にアニメーションがあるためにおかしく見える)
    // おそらくreact-transition-groupを使えばうまくできそう

    // 画像をスワイプした時の動作
    const swipeHandler = (isClick: boolean) => {
        if (isClick) {
            nextDisplayIndex()
            setSwipeDirection('left')
            setTimeout(() => {
                // 右にスワイプして表示画像をずらす
                setSwipeDirection(undefined)
            }, 300)
        }

        // start、endに値がない(イベントが発火していない)ときは処理をスルー
        if (!swipePosition.start || !swipePosition.end) {
            setSwipePosition({ start: undefined, end: undefined })
            return
        }
        if (swipePosition.end - swipePosition.start > 0) {
            previousDisplayIndex()
            setSwipeDirection('right')
            setTimeout(() => {
                // 左にスワイプして表示画像をずらす
                setSwipeDirection(undefined)
            }, 300)
        } else if (swipePosition.end - swipePosition.start < 0) {
            nextDisplayIndex()
            setSwipeDirection('left')
            setTimeout(() => {
                // 右にスワイプして表示画像をずらす
                setSwipeDirection(undefined)
            }, 300)
        }
        setSwipePosition({ start: undefined, end: undefined })
    }

    return {
        imageIndex,
        swipePosition,
        swipeDirection,
        setSwipePosition,
        nextDisplayIndex,
        previousDisplayIndex,
        swipeHandler,
    }
}
