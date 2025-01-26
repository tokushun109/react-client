'use client'

import { KeyboardArrowDown } from '@mui/icons-material'
import { useState } from 'react'

import { Breadcrumbs } from '@/components/bases/Breadcrumbs'
import { Select, SelectOption } from '@/components/bases/Select'
import { IClassification } from '@/features/classification/type'
import { ProductsByCategoryDisplay } from '@/features/product/components/CategoryProducts'
import { IProductsByCategory } from '@/features/product/type'

import styles from './styles.module.scss'

type Props = {
    categories: IClassification[]
    productsByCategory: IProductsByCategory[]
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
                        onSelect={(option) => {
                            onSelect(option, 'category')
                        }}
                        options={categories.map((v) => ({ value: v.uuid, label: v.name }))}
                        suffix={<KeyboardArrowDown />}
                        title="Category"
                    />
                </div>
                <div className={styles['search-area__select']}>
                    <Select
                        onSelect={(option) => {
                            onSelect(option, 'target')
                        }}
                        options={targets.map((v) => ({ value: v.uuid, label: v.name }))}
                        suffix={<KeyboardArrowDown />}
                        title="Target"
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
            <Breadcrumbs
                breadcrumbs={[
                    {
                        label: 'トップページ',
                        link: '/',
                    },
                    {
                        label: '商品一覧',
                        link: '/product',
                    },
                ]}
            />
        </div>
    )
}

export default ProductTemplate
