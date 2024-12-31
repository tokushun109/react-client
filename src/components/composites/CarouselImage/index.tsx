import classNames from 'classnames'

import { Chip } from '@/components/bases/Chip'
import { Image } from '@/components/bases/Image'
import { ColorEnum } from '@/types'

import styles from './styles.module.scss'
import { IThumbnail } from '@/features/product/type'

type Props = {
    item: IThumbnail
    shadow?: boolean
}

export const CarouselImage = ({ item, shadow = true }: Props) => {
    return (
        <div className={classNames(styles['container'], shadow && styles['shadow'])}>
            {item.product.category.uuid && (
                <div className={classNames(styles['chip'], styles['category'])}>
                    <Chip color={ColorEnum.Accent} fontSize={12}>
                        {item.product.category.name}
                    </Chip>
                </div>
            )}
            <Image src={item.apiPath} alt={item.product.name} />
            <div className={classNames(styles['chip'], styles['name'])}>
                <Chip color={ColorEnum.Accent} fontSize={12}>
                    {item.product.name}
                </Chip>
            </div>
        </div>
    )
}
