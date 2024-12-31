import classNames from 'classnames'

import { Button } from '@/components/atoms/Button'
import ProductThumbnail from '@/components/molecules/ProductThumbnail'
import { ICategoryProducts } from '@/types'
import { mainFontFace } from '@/utils/font'

import styles from './styles.module.scss'

type Props = {
    categoryProducts: ICategoryProducts
}

const CategoryProduct = ({ categoryProducts }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={classNames(styles['category-name'], mainFontFace.className)}>{categoryProducts.category.name}</div>
            <div className={styles['product-list']}>
                {categoryProducts.products.slice(0, 4).map((v) => (
                    <div className={styles['product-thumbnail']} key={v.uuid}>
                        <ProductThumbnail item={{ product: v, apiPath: v.productImages[0].apiPath }} />
                    </div>
                ))}
            </div>
            {categoryProducts.products.length > 4 && (
                <div className={styles['more-button']}>
                    <Button onClick={() => {}}>もっと見る</Button>
                </div>
            )}
        </div>
    )
}

export default CategoryProduct
