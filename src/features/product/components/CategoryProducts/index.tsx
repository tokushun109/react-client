import classNames from 'classnames'

import { Button } from '@/components/bases/Button'
import ProductThumbnail from '@/features/product/components/ProductThumbnail'

import { mainFontFace } from '@/utils/font'

import styles from './styles.module.scss'
import { IProductsByCategory } from '../../type'

type Props = {
    productsByCategory: IProductsByCategory
}

export const ProductsByCategoryDisplay = ({ productsByCategory }: Props) => {
    // 商品がなければ表示しない
    if (productsByCategory.products.length === 0) {
        return <></>
    }

    return (
        <div className={styles['container']}>
            <div className={classNames(styles['category-name'], mainFontFace.className)}>{productsByCategory.category.name}</div>
            <div className={styles['product-list']}>
                {productsByCategory.products.slice(0, 4).map((v) => (
                    <div className={styles['product-thumbnail']} key={v.uuid}>
                        <ProductThumbnail item={{ product: v, apiPath: v.productImages[0].apiPath }} />
                    </div>
                ))}
            </div>
            {productsByCategory.products.length > 4 && (
                <div className={styles['more-button']}>
                    <Button onClick={() => {}}>もっと見る</Button>
                </div>
            )}
        </div>
    )
}
