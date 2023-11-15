import React from 'react'

import { ColorCodeEnum, ColorType } from '@/types'

import styles from './styles.module.scss'

type Props = {
    color: ColorType
    fontColor?: string
    fontSize?: number
    children: React.ReactNode
}

const Chip = ({ color, fontColor = '#ffffff', fontSize = 16, children }: Props) => {
    return (
        <span
            className={styles.container}
            style={{
                background: ColorCodeEnum[color],
                color: fontColor,
                fontSize: `${fontSize}px`,
            }}
        >
            {children}
        </span>
    )
}

export default Chip
