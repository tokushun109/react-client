import { Metadata } from 'next'

import { getAllCategoryProducts } from '@/apis/product'
import ProductTemplate from '@/app/(contents)/product/template'

export async function generateMetadata(): Promise<Metadata> {
    const title = '商品一覧 | とこりり'
    const description = 'とこりりの商品一覧ページです。'
    const image = '/image/about/story.jpg'
    return {
        metadataBase: new URL(process.env.DOMAIN_URL || ''),
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            images: [image],
        },
        twitter: {
            title,
            description,
            images: [image],
        },
    }
}

const Product = async () => {
    const categoryProductsList = await getAllCategoryProducts()
    return <ProductTemplate categoryProductsList={categoryProductsList} />
}

export default Product
