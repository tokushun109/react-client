import { Metadata } from 'next'

import { getProductsByCategory } from '@/apis/product'
import ProductTemplate from '@/app/(contents)/product/template'
import { getCategories } from '@/apis/category'

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
    const productsByCategory = await getProductsByCategory({ mode: 'active', category: 'all', target: 'all' })
    const categories = await getCategories({ mode: 'used' })
    return <ProductTemplate productsByCategory={productsByCategory} categories={categories} />
}

export default Product
