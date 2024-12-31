import classNames from 'classnames'

import Chip from '@/components/atoms/Chip'
import { Image } from '@/components/atoms/Image'
import { ColorEnum, IThumbnail } from '@/types'

import styles from './styles.module.scss'

type Props = {
    item: IThumbnail
    shadow?: boolean
}

const HomeThumbnail = ({ item, shadow = true }: Props) => {
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

export default HomeThumbnail
