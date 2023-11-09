import classNames from 'classnames'
import styles from './styles.module.scss'

type Props = {
    size: number
    shadow?: boolean
    children: React.ReactNode
}

const Icon = ({ size, shadow = true, children }: Props) => {
    return (
        <div
            className={classNames(styles['container'], !shadow && styles['no-shadow'])}
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <div className={styles['content']}>{children}</div>
        </div>
    )
}

export default Icon
