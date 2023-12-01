'use client'

import classNames from 'classnames'

import { ColorCodeEnum, ColorEnum, ColorType } from '@/types'

import styles from './styles.module.scss'
import { ColorObject } from './types'

type Props = {
    color: ColorType
    size: number
    children: React.ReactNode
    onClick?: () => void
    contrast?: boolean
    shadow?: boolean
}

const Icon = ({ color, size, children, onClick = () => {}, contrast = false, shadow = true }: Props) => {
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
            onClick={onClick}
        >
            <div className={styles['content']}>{children}</div>
        </div>
    )
}

export default Icon
