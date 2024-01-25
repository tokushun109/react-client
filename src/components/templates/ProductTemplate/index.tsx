'use client'

import CategoryProduct from '@/components/organisms/CategoryProduct'
import { ICategoryProducts } from '@/types'

import styles from './styles.module.scss'

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
                        <CategoryProduct categoryProducts={v} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductTemplate
