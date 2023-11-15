'use client'

import { useState } from 'react'

import { ICarouselItem } from '@/types'

import styles from './styles.module.scss'
import ProductImage from '../ProductImage'

type Props = {
    items: ICarouselItem[]
}

const SlideShow = ({ items }: Props) => {
    const [displayIndex, setDisplayIndex] = useState<number>(0)

    return (
        <div className={styles['container']}>
            <div className={styles['content']}>
                <ProductImage item={items[displayIndex]} shadow={false} />
            </div>
        </div>
    )
}

export default SlideShow
