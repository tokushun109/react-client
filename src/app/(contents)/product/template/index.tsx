'use client'

import { CategoryProducts } from '@/features/product/components/CategoryProducts'

import styles from './styles.module.scss'
import { ICategoryProducts } from '@/features/product/type'

type Props = {
    categoryProductsList: ICategoryProducts[]
}

const ProductTemplate = ({ categoryProductsList }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['search-area']}>検索欄</div>
            <div className={styles['product-area']}>
                {categoryProductsList.map((v) => (
                    <div key={v.category.uuid}>
                        <CategoryProducts categoryProducts={v} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductTemplate
