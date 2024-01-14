import { Metadata } from 'next'

import { getCategoryProducts } from '@/apis/product'
import ProductTemplate from '@/components/templates/ProductTemplate'

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
    const categoryProducts = await getCategoryProducts()
    return <ProductTemplate categoryProducts={categoryProducts} />
}

export default Product
