import classNames from 'classnames'

import Button from '@/components/atoms/Button'
import Transition from '@/components/atoms/Transition'
import { ColorCodeEnum, ColorEnum, ColorType } from '@/types'
import { labelFontFace } from '@/utils/font'

import styles from './styles.module.scss'

// 色も指定する

type BaseProps = {
    title: string
    contrast?: boolean
    children: React.ReactNode
    color: ColorType
}

type Props =
    | (BaseProps & {
          button: false
      })
    | (BaseProps & {
          button: true
          buttonLabel: string
          onButtonClick: () => void
      })

const Section = (props: Props) => {
    if (props.button) {
        // ボタンがある時
        const { title, contrast, children, buttonLabel, color, onButtonClick } = props
        return (
            <div
                className={classNames(styles['container'], contrast && styles['contrast'])}
                style={contrast ? { background: ColorCodeEnum[color] } : {}}
            >
                <Transition>
                    <div
                        className={classNames(styles['title'], labelFontFace.className)}
                        style={{ color: ColorCodeEnum[!contrast ? color : ColorEnum.White] }}
                    >
                        {title}
                    </div>
                </Transition>
                <Transition>
                    <div className={styles['sentence']} style={{ color: !contrast ? '#757575' : ColorCodeEnum[ColorEnum.White] }}>
                        {children}
                    </div>
                </Transition>
                <Transition>
                    <div className={styles['button']} onClick={onButtonClick}>
                        <Button>{buttonLabel}</Button>
                    </div>
                </Transition>
            </div>
        )
    } else {
        // ボタンがない時
        const { title, contrast, children, color } = props
        return (
            <div className={classNames(styles['container'], contrast && styles['contrast'])}>
                <Transition>
                    <div className={classNames(styles['title'], labelFontFace.className)} style={{ color: ColorCodeEnum[color] }}>
                        {title}
                    </div>
                </Transition>
                <Transition>
                    <div className={styles['sentence']}>{children}</div>
                </Transition>
            </div>
        )
    }
}

export default Section
