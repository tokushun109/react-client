import Icon from '@/components/atoms/Icon'
import styles from './styles.module.scss'
import { ColorEnum } from '@/types/color'
import Image from 'next/image'
import IconCard from '@/components/molecules/IconCard'
import { Close } from '@mui/icons-material'
import { MenuList } from '@/types/menu'

type Props = {
    onCloseClick: () => void
}

const MenuScreen = ({ onCloseClick }: Props) => {
    return (
        <div className={styles['container']}>
            <div className={styles['close-icon']} onClick={onCloseClick}>
                <Icon size={72} color={ColorEnum.Primary} contrast>
                    <Close fontSize="large" />
                </Icon>
            </div>
            <div className={styles['logo-area']}>
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
                    {MenuList.map((menu) => (
                        <div className={styles['icon-card']} key={menu.label}>
                            <IconCard Icon={menu.icon} label={menu.label} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuScreen
