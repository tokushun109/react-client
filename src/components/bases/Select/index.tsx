import { useState } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

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

    const onClickTitle = () => {
        setIsOpen(!isOpen)
    }

    const onClickOption = (index: number) => {
        setSelectedIndex(index)
        onSelect(index)
        setIsOpen(false)
    }

    return (
        <div className={styles['container']}>
            <div className={styles['container__title']} onClick={onClickTitle}>
                {suffix && <span className={styles['container__title__suffix']}>{suffix}</span>}
                {`${title}${selectedIndex !== undefined ? ` - ${options[selectedIndex].label}` : ''}`}
            </div>
            {isOpen && (
                <ul className={styles['container__options']}>
                    {options.map((v, i) => (
                        <li
                            className={classNames(styles['container__option'], suffix !== undefined && styles[`suffix-padding`])}
                            style={{ color: selectedIndex === options.indexOf(v) ? 'red' : '' }}
                            key={v.value}
                            onClick={() => {
                                onClickOption(i)
                            }}
                        >
                            {v.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
