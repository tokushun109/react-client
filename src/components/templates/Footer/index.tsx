import ShareButtons from '@/components/molecules/ShareButtons'
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <footer className={styles['container']}>
            <ShareButtons />
            <span>©︎ 2023 とこりり</span>
        </footer>
    )
}

export default Footer
