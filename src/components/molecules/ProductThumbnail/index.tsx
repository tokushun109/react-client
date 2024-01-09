import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

import Chip from '@/components/atoms/Chip'
import { ColorEnum, IProductThumbnail } from '@/types'

import styles from './styles.module.scss'

type Props = {
    item: IProductThumbnail
    shadow?: boolean
}

const ProductThumbnail = ({ item, shadow = true }: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [apiPath, setApiPath] = useState<string>(item.apiPath)

    return (
        <div className={classNames(styles['container'], shadow && styles['shadow'])}>
            {item.product.category.uuid && (
                <div className={classNames(styles['chip'], styles['category'])}>
                    <Chip color={ColorEnum.Accent} fontSize={12}>
                        {item.product.category.name}
                    </Chip>
                </div>
            )}
            <Image
                src={isLoading ? '/image/gray-image.png' : apiPath}
                alt={item.product.name}
                fill
                sizes="100%"
                style={{ objectFit: 'cover', zIndex: 0, borderRadius: 12 }}
                priority={item.apiPath !== '/image/gray-image.png'}
                onLoad={() => {
                    setIsLoading(false)
                }}
                onError={() => {
                    setApiPath('/image/gray-image.png')
                }}
            />
            <div className={classNames(styles['chip'], styles['name'])}>
                <Chip color={ColorEnum.Accent} fontSize={12}>
                    {item.product.name}
                </Chip>
            </div>
        </div>
    )
}

export default ProductThumbnail
