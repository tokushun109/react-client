import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
}

const Button = ({ children }: Props) => {
    return (
        <div className={styles['container']}>
            <span>{children}</span>
        </div>
    )
}

export default Button
