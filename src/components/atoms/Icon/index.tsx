import classNames from 'classnames'
import styles from './styles.module.scss'
import { ColorCodeEnum, ColorEnum, ColorType } from '@/types/enum/color'
import { ColorObject } from './types'

type Props = {
    color: ColorType
    size: number
    contrast?: boolean
    shadow?: boolean
    children: React.ReactNode
}

const Icon = ({ color, size, contrast = false, shadow = true, children }: Props) => {
    const colorObject = ((): ColorObject => {
        if (!contrast)
            return {
                backGround: color,
                text: ColorEnum.White,
            }
        else
            return {
                backGround: ColorEnum.White,
                text: color,
            }
    })()

    return (
        <div
            className={classNames(styles['container'], !shadow && styles['no-shadow'])}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                background: ColorCodeEnum[colorObject.backGround],
                color: ColorCodeEnum[colorObject.text],
            }}
        >
            <div className={styles['content']}>{children}</div>
        </div>
    )
}

export default Icon
