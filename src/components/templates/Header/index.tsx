import styles from './styles.module.scss'
import Icon from '@/components/atoms/Icon'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import classNames from 'classnames'
import { ColorEnum } from '@/types/color'
import MenuScreen from '../MenuScreen'

const Header = () => {
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
            <div className={styles['menu-icon']}>
                <Icon size={72} color={ColorEnum.Primary}>
                    <MenuIcon fontSize="large" />
                </Icon>
            </div>
            <div className={styles['menu-screen']}>
                <MenuScreen />
            </div>
        </div>
    )
}

export default Header
