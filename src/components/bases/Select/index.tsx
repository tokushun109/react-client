import { useState, MouseEvent } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { doRippleAnimation, RippleColorEnum } from '@/utils/animation'

export type SelectOption<T = string> = {
    value: T
    label: string
}

type Props<T = string> = {
    title: string
    options: SelectOption<T>[]
    initialSelectedOption?: SelectOption<T>
    isSelectedAll?: boolean
    suffix?: React.ReactNode
    onSelect: (option: SelectOption<T> | undefined) => void
}

export const Select = <T,>({ title, options, initialSelectedOption, isSelectedAll = true, suffix, onSelect }: Props<T>) => {
    // プルダウンが開いているか
    const [isOpen, setIsOpen] = useState<boolean>(false)

    // 選択されているオプションのインデックス
    const [selectedOption, setSelectedOption] = useState<SelectOption<T> | undefined>(initialSelectedOption)

    // 表示されるタイトル
    const displayTitle = ((): string => {
        if (selectedOption === undefined) {
            return isSelectedAll ? `${title} - All` : title
        } else {
            return `${title} - ${selectedOption.label}`
        }
    })()

    const onClickTitle = (e: MouseEvent) => {
        doRippleAnimation(e, RippleColorEnum.Black)
        setIsOpen(!isOpen)
    }

    const onClickOption = (e: MouseEvent, selectedOption: SelectOption<T> | undefined) => {
        doRippleAnimation(e, RippleColorEnum.Orange)
        setSelectedOption(selectedOption)
        onSelect(selectedOption)

        // 2秒後にオプションを閉じる
        setTimeout(() => {
            setIsOpen(false)
        }, 200)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['container__title']} onClick={onClickTitle}>
                {suffix && <span className={classNames(styles['container__title__suffix'], styles['active'])}>{suffix}</span>}
                {displayTitle}
            </div>
            <div className={classNames(styles['container__options'], isOpen ? styles['visible'] : '')}>
                <ul className={styles['container__options__inner']}>
                    {isSelectedAll && (
                        <li
                            className={classNames(
                                styles['container__option'],
                                suffix !== undefined && styles[`suffix-padding`],
                                isSelectedAll && selectedOption === undefined && styles['active'],
                            )}
                            onClick={(e) => {
                                onClickOption(e, undefined)
                            }}
                        >
                            All
                        </li>
                    )}
                    {options.map((v, i) => (
                        <li
                            className={classNames(
                                styles['container__option'],
                                suffix !== undefined && styles[`suffix-padding`],
                                selectedOption === v && styles['active'],
                            )}
                            key={`${i}-${v.label}`}
                            onClick={(e) => {
                                onClickOption(e, v)
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
