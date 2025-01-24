import classNames from 'classnames'

import { ShareButtons } from '@/components/composites/ShareButtons'

import MobileMenu from './components/MobileMenu'
import styles from './styles.module.scss'

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
