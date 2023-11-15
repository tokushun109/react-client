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

    return await res.json()
}
