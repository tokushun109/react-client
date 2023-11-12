import Card from '@/components/atoms/Card'
import styles from './styles.module.scss'
import { ComponentType } from 'react'

type Props = {
    Icon: ComponentType<{ style: object }>
    label: string
}

const IconCard = ({ Icon, label }: Props) => {
    return (
        <div className={styles['container']}>
            <Card>
                <div className={styles['content']}>
                    <div className={styles['icon']}>
                        <Icon style={{ fontSize: '160px' }} />
                    </div>
                    <div className={styles['label']}>{label}</div>
                </div>
            </Card>
        </div>
    )
}

export default IconCard
