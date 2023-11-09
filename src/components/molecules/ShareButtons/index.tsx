import Icon from '@/components/atoms/Icon'
import styles from './styles.module.scss'
import ReplyIcon from '@mui/icons-material/Reply'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import { ColorEnum } from '@/types/color'

const ShareButtons = () => {
    return (
        <div className={styles['container']}>
            <div className={styles['message']}>
                <div className={styles['reply']}>
                    <ReplyIcon />
                </div>
                <div>Share This Page♪</div>
            </div>
            <div className={styles['icon-area']}>
                <div>
                    <Icon size={40} shadow={false} color={ColorEnum.Primary} contrast>
                        <TwitterIcon />
                    </Icon>
                </div>
                <div>
                    <Icon size={40} shadow={false} color={ColorEnum.Primary} contrast>
                        <FacebookIcon />
                    </Icon>
                </div>
            </div>
        </div>
    )
}

export default ShareButtons
