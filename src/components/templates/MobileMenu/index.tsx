import { MenuList } from '@/types/menu'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { labelFontFace } from '@/fonts'

const MobileMenu = () => {
    return (
        <ul className={styles['container']}>
            {MenuList.map((menu) => (
                <li className={styles['menu-list']} key={menu.label}>
                    <div className={styles['icon']}>
                        <menu.icon />
                    </div>
                    <div className={classNames(styles['label'], labelFontFace.className)}>{menu.label}</div>
                </li>
            ))}
        </ul>
    )
}

export default MobileMenu
