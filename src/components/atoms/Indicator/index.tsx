import styles from './styles.module.scss'

type Props = {
    children: React.ReactNode
}
const Indicator = ({ children }: Props) => {
    return <div className={styles['container']}>{children}</div>
}

export default Indicator
