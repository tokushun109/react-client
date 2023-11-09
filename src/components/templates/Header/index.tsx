import styles from './styles.module.scss'
import Icon from '@/components/atoms/Icon'
import MenuIcon from '@mui/icons-material/Menu'

type Props = {}

const Header = () => {
    return (
        <div className={styles['container']}>
            {/* モバイル用 */}
            <header className={styles['sm']}>テスト</header>
            {/* デフォルト用 */}
            <div className={styles['menu-icon']}>
                <Icon size={72}>
                    <MenuIcon fontSize="large" />
                </Icon>
            </div>
        </div>
    )
}

export default Header
