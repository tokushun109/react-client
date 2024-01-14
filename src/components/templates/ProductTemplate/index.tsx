'use client'

import ProductThumbnail from '@/components/molecules/ProductThumbnail'
import { ICategoryProducts } from '@/types'

import styles from './styles.module.scss'

type Props = {
    categoryProducts: ICategoryProducts[]
}

const ProductTemplate = ({ categoryProducts }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['search-area']}>検索欄</div>
            <div className={styles['product-area']}>
                <div>カテゴリー名</div>
                <div>
                    <div className={styles['product-thumbnail']}>
                        <ProductThumbnail
                            item={{
                                product: categoryProducts[0].products[0],
                                apiPath: categoryProducts[0].products[0].productImages[0].apiPath,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTemplate
