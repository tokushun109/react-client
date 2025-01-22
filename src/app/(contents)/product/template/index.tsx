'use client'

import { CategoryProducts } from '@/features/product/components/CategoryProducts'

import styles from './styles.module.scss'
import { IProductsByCategory } from '@/features/product/type'
import { IClassification } from '@/features/classification/type'
import { Select } from '@/components/bases/Select'
import { KeyboardArrowDown } from '@mui/icons-material'

type Props = {
    productsByCategory: IProductsByCategory[]
    categories: IClassification[]
    targets: IClassification[]
}

const ProductTemplate = ({ productsByCategory, categories, targets }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['search-area']}>
                <div className={styles['search-area__select']}>
                    <Select
                        title="Category"
                        options={categories.map((v) => ({ value: v.uuid, label: v.name }))}
                        suffix={<KeyboardArrowDown />}
                        onSelect={(index) => console.log(index)}
                    />
                </div>
                <div className={styles['search-area__select']}>
                    <Select
                        title="Target"
                        options={targets.map((v) => ({ value: v.uuid, label: v.name }))}
                        suffix={<KeyboardArrowDown />}
                        onSelect={(index) => console.log(index)}
                    />
                </div>
            </div>
            <div className={styles['product-area']}>
                {productsByCategory.map((v) => (
                    <div key={v.category.uuid}>
                        <CategoryProducts categoryProducts={v} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductTemplate
