import styles from './styles.module.scss'

type Props = {
    size: number
    children: React.ReactNode
}

const Icon = ({ size, children }: Props) => {
    return (
        <div
            className={styles['container']}
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
