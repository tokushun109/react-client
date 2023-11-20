'use client'

import classNames from 'classnames'

import { useSlideTransition } from './hooks'
import styles from './styles.module.scss'

type Props = { children: React.ReactNode }

const SlideTransition = ({ children }: Props) => {
    const { isInit, isVisible, childrenRef } = useSlideTransition()

    return (
        <div className={classNames(styles['container'], !isInit && styles[isVisible ? 'visible' : 'invisible'])} ref={childrenRef}>
            {children}
        </div>
    )
}

export default SlideTransition
