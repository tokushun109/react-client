import { Twitter, Facebook } from '@mui/icons-material'
import ReplyIcon from '@mui/icons-material/Reply'

import { Icon } from '@/components/atoms/Icon'
import { ColorEnum } from '@/types'

import styles from './styles.module.scss'

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
                        <Twitter />
                    </Icon>
                </div>
                <div>
                    <Icon size={40} shadow={false} color={ColorEnum.Primary} contrast>
                        <Facebook />
                    </Icon>
                </div>
            </div>
        </div>
    )
}

export default ShareButtons
