'use client'

import useSWRImmutable from 'swr/immutable'

import { ICarouselItem } from '@/types'

export const useProductImage = (item: ICarouselItem) => {
    const { data: src } = useSWRImmutable(
        item.apiPath,
        (...args) =>
            fetch(...args).then((res) => {
                if (!res.ok) return '/image/gray-image.png'
                return item.apiPath
            }),
        { refreshInterval: 0 },
    )

    return { src }
}
