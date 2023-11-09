import Icon from '@/components/atoms/Icon'
import styles from './styles.module.scss'
import ReplyIcon from '@mui/icons-material/Reply'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

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
                    <Icon size={40} shadow={false}>
                        <TwitterIcon />
                    </Icon>
                </div>
                <div>
                    <Icon size={40} shadow={false}>
                        <FacebookIcon />
                    </Icon>
                </div>
            </div>
        </div>
    )
}

export default ShareButtons
