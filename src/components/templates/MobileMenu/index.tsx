'use client'

import classNames from 'classnames'
import { useRouter } from 'next/navigation'

import { MenuEnum, MenuList } from '@/types'
import { labelFontFace } from '@/utils/font'

import styles from './styles.module.scss'

const MobileMenu = () => {
    const router = useRouter()

    return (
        <ul className={styles['container']}>
            {Object.values(MenuEnum).map((menu) => (
                <li
                    className={styles['menu-list']}
                    key={MenuList[menu].label}
                    onClick={() => {
                        router.push(MenuList[menu].link)
                    }}
                >
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
