import { ImageType } from '@/types'
import { IClassification } from '../classification/type'
import { ISiteDetail } from '../site/type'

export interface IProductImage {
    uuid: string
    name: string
    apiPath: string
    order: number
}

export interface IImagePathOrder {
    path: string
    order: number | null
    type: ImageType
}

export interface IProduct {
    uuid: string
    name: string
    description: string
    price: number
    category: IClassification
    target: IClassification
    tags: IClassification[]
    productImages: IProductImage[]
    siteDetails: ISiteDetail[]
    isRecommend: boolean
    isActive: boolean
}

export interface IProductsByCategory {
    category: IClassification
    products: IProduct[]
}

export interface IThumbnail {
    product: IProduct
    apiPath: string
}
