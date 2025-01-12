import { useState } from 'react'
import styles from './styles.module.scss'

type SelectOption = {
    value: string
    label: string
}
type Props = {
    title: string
    options: SelectOption[]
    initialSelectedIndex?: number
    onSelect: (index: number) => void
}

export const Select = ({ title, options, initialSelectedIndex, onSelect = () => {} }: Props) => {
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
                {`${title}${selectedIndex !== undefined ? ` - ${options[selectedIndex].label}` : ''}`}
            </div>
            {isOpen && (
                <ul className={styles['container__options']}>
                    {options.map((v, i) => (
                        <li
                            className={styles['container__option']}
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
