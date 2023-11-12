import Button from '@/components/atoms/Button'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { labelFontFace } from '@/fonts'

type Props = {
    title: string
    buttonLabel: string
    contrast?: boolean
    children: React.ReactNode
}

const Section = ({ title, buttonLabel, contrast = false, children }: Props) => {
    return (
        <div className={classNames(styles['container'], contrast && styles['contrast'])}>
            <div className={classNames(styles['title'], labelFontFace.className)}>{title}</div>
            <div className={styles['sentence']}>{children}</div>
            <div className={styles['button']}>
                <Button>{buttonLabel}</Button>
            </div>
        </div>
    )
}

export default Section
