import { ICategoryProducts, IThumbnail } from '@/features/product/type'
import { ApiError } from '@/utils/error'
import { convertObjectToURLSearchParams } from '@/utils/request'

export interface IGetAllCategoryProductsParams {
    mode: 'all' | 'active'
    category: 'all' | string
    target: 'all' | string
}

/** カテゴリーごとの商品リストを取得 */
export const getAllCategoryProducts = async (params: IGetAllCategoryProductsParams): Promise<ICategoryProducts[]> => {
    const query = convertObjectToURLSearchParams(params)
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
