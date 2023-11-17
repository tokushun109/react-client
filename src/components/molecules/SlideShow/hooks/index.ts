import { useState } from 'react'

import { ICarouselItem } from '@/types'

import { SwipePosition } from '../types'

export const useSlideShow = (items: ICarouselItem[]) => {
    const [displayIndex, setDisplayIndex] = useState<number>(0)
    const [swipePosition, setSwipePosition] = useState<SwipePosition>({ start: undefined, end: undefined })

    // 次の画像を表示する
    const nextDisplayIndex = () => {
        if (displayIndex + 1 < maxLength) {
            setDisplayIndex(displayIndex + 1)
        } else {
            setDisplayIndex(0)
        }
    }

    // 前の画像を表示する
    const previousDisplayIndex = () => {
        if (displayIndex > 0) {
            setDisplayIndex(displayIndex - 1)
        } else {
            setDisplayIndex(maxLength - 1)
        }
    }

    // 画像をスワイプした時の動作
    const swipeHandler = () => {
        if (!swipePosition.start || !swipePosition.end) {
            setSwipePosition({ start: undefined, end: undefined })
            return
        }
        if (swipePosition.end - swipePosition.start > 0) {
            // 左にスワイプ
            previousDisplayIndex()
        } else if (swipePosition.end - swipePosition.start < 0) {
            // 右にスワイプ
            nextDisplayIndex()
        }
        setSwipePosition({ start: undefined, end: undefined })
    }

    // 商品画像の数
    const maxLength = items.length

    return {
        displayIndex,
        swipePosition,
        setSwipePosition,
        nextDisplayIndex,
        previousDisplayIndex,
        swipeHandler,
    }
}
