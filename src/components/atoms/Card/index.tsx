import classNames from 'classnames'
import styles from './styles.module.scss'
import { ColorCodeEnum, ColorEnum, ColorType } from '@/types/color'

type Props = {
    color?: ColorType
    width?: string
    height?: string
    shadow?: boolean
    children: React.ReactNode
}

const Card = ({ color = ColorEnum.White, width = 'auto', height = 'auto', shadow = true, children }: Props) => {
    return (
        <div
            className={classNames(styles['container'], !shadow && styles['no-shadow'])}
            style={{
                width,
                height,
                background: ColorCodeEnum[color],
            }}
        >
            <div className={styles['content']}>{children}</div>
        </div>
    )
}

export default Card