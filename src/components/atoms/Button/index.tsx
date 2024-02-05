import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
    onClick?: () => void
}

const Button = ({ children, onClick = () => {} }: Props) => {
    return (
        <div className={styles['container']} onClick={onClick}>
            <span>{children}</span>
        </div>
    )
}

export default Button
