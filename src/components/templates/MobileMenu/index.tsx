import { MenuEnum, MenuList } from '@/types'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { labelFontFace } from '@/utils/font'

const MobileMenu = () => {
    return (
        <ul className={styles['container']}>
            {Object.values(MenuEnum).map((menu) => (
                <li className={styles['menu-list']} key={MenuList[menu].label}>
                    <div className={styles['icon']}>
                        {(() => {
                            const Icon = MenuList[menu].icon
                            return <Icon />
                        })()}
                    </div>
                    <div className={classNames(styles['label'], labelFontFace.className)}>{MenuList[menu].label}</div>
                </li>
            ))}
        </ul>
    )
}

export default MobileMenu
