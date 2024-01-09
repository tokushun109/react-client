'use client'

import styles from './styles.module.scss'

const ProductTemplate = () => {
    return (
        <div className={styles['container']}>
            <div
                className={styles['search-area']}
                style={{
                    border: '2px solid gray',
                    marginBottom: '48px',
                    height: '64px',
                }}
            >
                検索欄
            </div>
            <div
                className={styles['category-product']}
                style={{
                    border: '2px solid gray',
                    height: '480px',
                }}
            >
                <div>商品名</div>
            </div>
        </div>
    )
}

export default ProductTemplate
