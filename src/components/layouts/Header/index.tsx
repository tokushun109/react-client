'use client'

import { Menu } from '@mui/icons-material'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Icon } from '@/components/elements/atoms/Icon'
import { ColorEnum } from '@/types'

import { SlideAnimation } from './animations'
import styles from './styles.module.scss'
import MenuScreen from './components/MenuScreen'

const Header = () => {
    const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false)
    const router = useRouter()

    return (
        <div className={styles['container']}>
            <header className={classNames(styles['header'], styles['sm'])}>
                <h1
                    className={styles['logo-area']}
                    onClick={() => {
                        router.push('/')
                    }}
                >
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
            {!isVisibleMenu && (
                <div className={classNames(styles['menu-icon'], styles['default'])}>
                    <Icon
                        size={72}
                        color={ColorEnum.Primary}
                        onClick={() => {
                            setIsVisibleMenu(true)
                        }}
                    >
                        <Menu fontSize="large" />
                    </Icon>
                </div>
            )}
            <AnimatePresence>
                {isVisibleMenu && (
                    <motion.div className={classNames(styles['menu-screen'], styles['default'])} {...SlideAnimation}>
                        <MenuScreen
                            onCloseClick={() => {
                                setIsVisibleMenu(false)
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Header
