import { useCallback, useEffect, useRef, useState } from 'react'

export const useTransition = () => {
    const [isInit, setIsInit] = useState<boolean>(true)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const childrenRef = useRef<HTMLDivElement>(null)

    const handleScroll = useCallback(
        (initialCheck: boolean) => {
            if (isVisible || !childrenRef.current) return

            const top = childrenRef.current.getBoundingClientRect().top
            if (top < window.innerHeight - 50) {
                setIsVisible(true)
            }
            // 初期レンダリングのチェックで非表示の場合はstateをfalseにする
            if (initialCheck) setIsInit(false)
        },
        [isVisible],
    )

    useEffect(() => {
        // 初期位置で表示するかを確認する
        handleScroll(true)

        window.addEventListener('scroll', () => {
            handleScroll(false)
        })

        return () => {
            window.removeEventListener('scroll', () => {
                handleScroll(false)
            })
        }
    }, [handleScroll])

    return {
        isInit,
        isVisible,
        childrenRef,
    }
}
