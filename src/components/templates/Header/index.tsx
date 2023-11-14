'use client'

import styles from './styles.module.scss'
import Icon from '@/components/atoms/Icon'
import Image from 'next/image'
import classNames from 'classnames'
import MenuScreen from '../MenuScreen'
import { Menu } from '@mui/icons-material'
import { ColorEnum } from '@/types/enum/color'
import { useState } from 'react'

const Header = () => {
    const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)

    return (
        <div className={styles['container']}>
            {/* モバイル用 */}
            <header className={classNames(styles['header'], styles['sm'])}>
                <h1>
                    <Image
                        src="/logo/tocoriri_logo_white.png"
                        alt="とこりり"
                        width={96}
                        height={48}
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </h1>
            </header>
            {/* デフォルト用 */}
            <div
                className={styles['menu-icon']}
                onClick={() => {
                    setIsVisibleMenu(true)
                }}
            >
                <Icon size={72} color={ColorEnum.Primary}>
                    <Menu fontSize="large" />
                </Icon>
            </div>
            {isVisibleMenu && (
                <div className={styles['menu-screen']}>
                    <MenuScreen
                        onCloseClick={() => {
                            setIsVisibleMenu(false)
                        }}
                    />
                </div>
            )}
        </div>
    )
}

export default Header
