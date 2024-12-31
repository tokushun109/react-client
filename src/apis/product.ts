import { ICategoryProducts, IGetProductsParams, IThumbnail } from '@/features/product/type'
import { ApiError } from '@/utils/error'

export const getAllCategoryProducts = async (): Promise<ICategoryProducts[]> => {
    const params: IGetProductsParams & { [x: string]: string } = {
        mode: 'active',
        category: 'all',
        target: 'all',
    }

    const query = new URLSearchParams(params)
    const res = await fetch(`${process.env.API_URL}/category/product?${query}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    return await res.json()
}

export const getCarouselImages = async (): Promise<IThumbnail[]> => {
    const res = await fetch(`${process.env.API_URL}/carousel_image/`, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })

    if (!res.ok) throw new ApiError(res)

    return await res.json()
}
