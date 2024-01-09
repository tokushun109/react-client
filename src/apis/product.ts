import { IGetProductsParams, IProduct, IProductThumbnail } from '@/types'
import { ApiError } from '@/utils/error'

export const getAllProducts = async (): Promise<IProduct[]> => {
    const params: IGetProductsParams & { [x: string]: string } = {
        mode: 'active',
        category: 'all',
        target: 'all',
    }

    const query = new URLSearchParams(params)
    const res = await fetch(`${process.env.API_URL}/product?${query}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    return await res.json()
}

export const getCarouselImages = async (): Promise<IProductThumbnail[]> => {
    const res = await fetch(`${process.env.API_URL}/carousel_image/`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    if (!res.ok) throw new ApiError(res)

    return await res.json()
}
