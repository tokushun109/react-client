import classNames from 'classnames'

import styles from './styles.module.scss'
import MobileMenu from './components/MobileMenu'
import { ShareButtons } from '@/components/composites/ShareButtons'

const Footer = () => {
    return (
        <footer className={styles['container']}>
            <ShareButtons />
            <span>©︎ 2023 とこりり</span>
            <div className={classNames(styles['mobile-menu'], styles['sm'])}>
                <MobileMenu />
            </div>
        </footer>
    )
}

export default Footer
