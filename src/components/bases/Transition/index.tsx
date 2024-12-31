'use client'

import classNames from 'classnames'

import { useTransition } from './hooks'
import styles from './styles.module.scss'

type Props = { children: React.ReactNode; type?: 'slide' }

export const Transition = ({ children, type = 'slide' }: Props) => {
    const { isInit, isVisible, childrenRef } = useTransition()

    return (
        <div className={classNames(styles['container'], styles[type], !isInit && styles[isVisible ? 'visible' : 'invisible'])} ref={childrenRef}>
            {children}
        </div>
    )
}
