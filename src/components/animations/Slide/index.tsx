'use client'

import classNames from 'classnames'

import { useSlide } from './hooks'
import styles from './styles.module.scss'

type Props = { children: React.ReactNode }

export const Slide = ({ children }: Props) => {
    const { isInit, isVisible, childrenRef } = useSlide()

    return (
        <div className={classNames(styles['container'], !isInit && styles[isVisible ? 'visible' : 'invisible'])} ref={childrenRef}>
            {children}
        </div>
    )
}
