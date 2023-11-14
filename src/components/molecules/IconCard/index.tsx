import classNames from 'classnames'
import { ComponentType } from 'react'

import Card from '@/components/atoms/Card'
import { labelFontFace } from '@/utils/font'

import styles from './styles.module.scss'

type Props = {
    Icon: ComponentType
    label: string
}

const IconCard = ({ Icon, label }: Props) => {
    return (
        <div className={styles['container']}>
            <Card>
                <div className={styles['content']}>
                    <div className={styles['icon']}>
                        <Icon />
                    </div>
                    <div className={classNames(styles['label'], labelFontFace.className)}>{label}</div>
                </div>
            </Card>
        </div>
    )
}

export default IconCard
