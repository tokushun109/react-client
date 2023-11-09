import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
}

const Button = ({ children }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['content']}>{children}</div>
        </div>
    )
}

export default Button
