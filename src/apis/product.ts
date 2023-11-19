import { ICarouselItem } from '@/types'
import { ApiError } from '@/utils/error'

export const getCarouselImages = async (): Promise<ICarouselItem[]> => {
    const res = await fetch(`${process.env.API_URL}/carousel_image/`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    if (!res.ok) throw new ApiError(res)

    const result: ICarouselItem[] = await res.json()

    await Promise.all(
        result.map(async (v) => {
            const imageRes = await fetch(v.apiPath)
            // 画像が存在しないときはグレイイメージで返す
            if (!imageRes.ok) {
                v.apiPath = '/image/gray-image.png'
            }
        }),
    )

    return result
}
