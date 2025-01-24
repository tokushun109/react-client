'use client'

import { ProductsByCategoryDisplay } from '@/features/product/components/CategoryProducts'

import styles from './styles.module.scss'
import { IProductsByCategory } from '@/features/product/type'
import { IClassification } from '@/features/classification/type'
import { Select, SelectOption } from '@/components/bases/Select'
import { KeyboardArrowDown } from '@mui/icons-material'
import { useState } from 'react'

type Props = {
    productsByCategory: IProductsByCategory[]
    categories: IClassification[]
    targets: IClassification[]
}

interface IFilteredCondition {
    category: SelectOption | undefined
    target: SelectOption | undefined
}

const ProductTemplate = ({ productsByCategory, categories, targets }: Props) => {
    // 絞りこみ条件
    const [filteredCondition, setFilteredCondition] = useState<IFilteredCondition>({ category: undefined, target: undefined })

    // 絞り込んだ後の商品リスト
    const filteredProductsByCategory = ((): IProductsByCategory[] => {
        let result: IProductsByCategory[] = productsByCategory
        // categoryによる絞り込み
        result = filteredCondition.category
            ? productsByCategory.filter((v) => v.category.uuid === filteredCondition.category!.value)
            : productsByCategory

        // targetによる絞り込み
        result = result.map((v) => ({
            ...v,
            products: v.products.filter((product) => {
                return filteredCondition.target ? product.target.uuid === filteredCondition.target!.value : true
            }),
        }))
        return result
    })()

    const onSelect = (option: SelectOption | undefined, key: keyof IFilteredCondition) => {
        setFilteredCondition({ ...filteredCondition, [key]: option })
    }

    return (
        <div className={styles['container']}>
            <div className={styles['search-area']}>
                <div className={styles['search-area__select']}>
                    <Select
                        title="Category"
                        options={categories.map((v) => ({ value: v.uuid, label: v.name }))}
                        suffix={<KeyboardArrowDown />}
                        onSelect={(option) => {
                            onSelect(option, 'category')
                        }}
                    />
                </div>
                <div className={styles['search-area__select']}>
                    <Select
                        title="Target"
                        options={targets.map((v) => ({ value: v.uuid, label: v.name }))}
                        suffix={<KeyboardArrowDown />}
                        onSelect={(option) => {
                            onSelect(option, 'target')
                        }}
                    />
                </div>
            </div>
            <div className={styles['product-area']}>
                {filteredProductsByCategory.map((v) => (
                    <div key={v.category.uuid}>
                        <ProductsByCategoryDisplay productsByCategory={v} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductTemplate
