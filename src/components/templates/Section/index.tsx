import classNames from 'classnames'

import Button from '@/components/atoms/Button'
import Transition from '@/components/atoms/Transition'
import { labelFontFace } from '@/utils/font'

import styles from './styles.module.scss'

type Props = {
    title: string
    buttonLabel: string
    contrast?: boolean
    children: React.ReactNode
}

const Section = ({ title, buttonLabel, contrast = false, children }: Props) => {
    return (
        <div className={classNames(styles['container'], contrast && styles['contrast'])}>
            <Transition>
                <div className={classNames(styles['title'], labelFontFace.className)}>{title}</div>
            </Transition>
            <Transition>
                <div className={styles['sentence']}>{children}</div>
            </Transition>
            <Transition>
                <div className={styles['button']}>
                    <Button>{buttonLabel}</Button>
                </div>
            </Transition>
        </div>
    )
}

export default Section
