import classNames from 'classnames'

import ShareButtons from '@/components/molecules/ShareButtons'

import styles from './styles.module.scss'
import MobileMenu from '../MobileMenu'

const Footer = () => {
    return (
        <footer className={styles['container']}>
            <ShareButtons />
            <span>©︎ 2023 とこりり</span>
            <div className={classNames(styles['mobile-menu'], 'sm')}>
                <MobileMenu />
            </div>
        </footer>
    )
}

export default Footer
