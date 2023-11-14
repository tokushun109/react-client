import { getCarouselImages } from '@/apis/product'

export const useHome = async () => {
    const carouselImages = await getCarouselImages()

    return { carouselImages }
}
