'use client'

import { Close } from '@mui/icons-material'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import { Icon } from '@/components/bases/Icon'
import { MenuEnum, MenuList, ColorEnum, MenuType } from '@/types'
import { NavigationType } from '@/types/enum/navigation'
import { IconCard } from '@/components/composites/IconCard'

import styles from './styles.module.scss'

type Props = {
    onCloseClick: () => void
}

const MenuScreen = ({ onCloseClick }: Props) => {
    const router = useRouter()
    const pathname = usePathname() as NavigationType

    const iconClickHandler = (menu: MenuType | '/') => {
        onCloseClick()

        setTimeout(() => {
            if (menu === '/') {
                router.push(menu)
            } else {
                router.push(MenuList[menu].link)
            }
        }, 200)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['close-icon']}>
                <Icon size={72} color={ColorEnum.Primary} onClick={onCloseClick} contrast>
                    <Close fontSize="large" />
                </Icon>
            </div>
            <div
                className={styles['logo-area']}
                onClick={() => {
                    iconClickHandler('/')
                }}
            >
                <h1>
                    <Image
                        src="/logo/tocoriri_logo_white.png"
                        alt="とこりり"
                        width={400}
                        height={200}
                        style={{
                            objectFit: 'cover',
                        }}
                        priority
                    />
                </h1>
            </div>
            <div className={styles['icon-card-area']}>
                <div className={styles['icon-card-area-wrapper']}>
                    {Object.values(MenuEnum).map((menu) => (
                        <div
                            className={styles['icon-card']}
                            key={MenuList[menu].label}
                            onClick={() => {
                                iconClickHandler(menu)
                            }}
                        >
                            <IconCard Icon={MenuList[menu].icon} label={MenuList[menu].label} isSelected={pathname === MenuList[menu].link} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuScreen
