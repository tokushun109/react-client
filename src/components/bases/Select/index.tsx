import { useState, MouseEvent } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { doRippleAnimation, RippleColorEnum } from '@/utils/animation'

type SelectOption = {
    value: string
    label: string
}

type Props = {
    title: string
    options: SelectOption[]
    initialSelectedIndex?: number
    suffix?: React.ReactNode
    onSelect: (index: number) => void
}

export const Select = ({ title, options, initialSelectedIndex, suffix, onSelect }: Props) => {
    // プルダウンが開いているか
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // 選択されているオプションのインデックス
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(initialSelectedIndex)

    const onClickTitle = (e: MouseEvent) => {
        doRippleAnimation(e, RippleColorEnum.Black)
        setIsOpen(!isOpen)
    }

    const onClickOption = (e: MouseEvent, index: number) => {
        doRippleAnimation(e, RippleColorEnum.Orange)
        setSelectedIndex(index)
        onSelect(index)
        // 2秒後にオプションを閉じる
        setTimeout(() => {
            setIsOpen(false)
        }, 200)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['container__title']} onClick={onClickTitle}>
                {suffix && <span className={classNames(styles['container__title__suffix'], styles['active'])}>{suffix}</span>}
                {`${title}${selectedIndex !== undefined ? ` - ${options[selectedIndex].label}` : ''}`}
            </div>
            <div className={classNames(styles['container__options'], isOpen ? styles['visible'] : '')}>
                <ul className={styles['container__options__inner']}>
                    {options.map((v, i) => (
                        <li
                            className={classNames(
                                styles['container__option'],
                                suffix !== undefined && styles[`suffix-padding`],
                                selectedIndex === i && styles['active'],
                            )}
                            key={v.value}
                            onClick={(e) => {
                                onClickOption(e, i)
                            }}
                        >
                            {v.label}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
