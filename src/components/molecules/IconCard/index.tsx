import Card from '@/components/atoms/Card'
import styles from './styles.module.scss'
import { ComponentType } from 'react'
import classNames from 'classnames'
import { labelFontFace } from '@/utils/font'

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
