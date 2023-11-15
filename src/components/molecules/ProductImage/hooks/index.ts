import { ICarouselItem } from '@/types'

export const useProductImage = async (item: ICarouselItem) => {
    const src = await (async () => {
        const res = await fetch(item.apiPath, {
            method: 'GET',
        })

        // 取得に失敗した場合は、グレイイメージを表示
        if (!res.ok) return '/image/gray-image.png'
        return item.apiPath
    })()

    return { src }
}
