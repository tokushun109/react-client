import classNames from 'classnames'

import { Button } from '@/components/bases/Button'
import ProductThumbnail from '@/features/product/components/ProductThumbnail'

import { mainFontFace } from '@/utils/font'

import styles from './styles.module.scss'
import { ICategoryProducts } from '../../type'

type Props = {
    categoryProducts: ICategoryProducts
}

export const CategoryProducts = ({ categoryProducts }: Props) => {
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
