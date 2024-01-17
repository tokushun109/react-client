import classNames from 'classnames'

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
                {/* TODO 初期表示する商品数を画面幅で変更する */}
                {categoryProducts.products.slice(0, 2).map((v) => (
                    <div className={styles['product-thumbnail']} key={v.uuid}>
                        <ProductThumbnail item={{ product: v, apiPath: v.productImages[0].apiPath }} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryProduct
