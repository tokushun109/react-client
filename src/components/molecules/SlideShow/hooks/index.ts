import { useEffect, useState } from 'react'

import { ICarouselItem } from '@/types'

export const useSlideShow = (items: ICarouselItem[]) => {
    const [displayIndex, setDisplayIndex] = useState<number>(0)

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

    useEffect(() => {}, [])

    const maxLength = items.length

    return {
        displayIndex,
        previousDisplayIndex,
    }
}
