'use client'

import { Menu } from '@mui/icons-material'
import classNames from 'classnames'
import Image from 'next/image'
import { useState } from 'react'

import Icon from '@/components/atoms/Icon'
import { ColorEnum } from '@/types'

import styles from './styles.module.scss'
import MenuScreen from '../MenuScreen'

const Header = () => {
    const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)

    return (
        <div className={styles['container']}>
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
            <div
                className={classNames(styles['menu-icon'], styles['default'])}
                onClick={() => {
                    setIsVisibleMenu(true)
                }}
            >
                <Icon size={72} color={ColorEnum.Primary}>
                    <Menu fontSize="large" />
                </Icon>
            </div>
            {isVisibleMenu && (
                <div className={classNames(styles['menu-screen'], styles['default'])}>
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
