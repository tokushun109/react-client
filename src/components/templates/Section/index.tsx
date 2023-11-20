import classNames from 'classnames'

import Button from '@/components/atoms/Button'
import SlideTransition from '@/components/atoms/SlideTransition'
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
            <SlideTransition>
                <div className={classNames(styles['title'], labelFontFace.className)}>{title}</div>
            </SlideTransition>
            <SlideTransition>
                <div className={styles['sentence']}>{children}</div>
            </SlideTransition>
            <SlideTransition>
                <div className={styles['button']}>
                    <Button>{buttonLabel}</Button>
                </div>
            </SlideTransition>
        </div>
    )
}

export default Section
