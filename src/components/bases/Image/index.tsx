import NextImage from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

type Props = {
    src: string
    alt: string
}

export const Image = ({ src, alt }: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [displaySrc, setDisplaySrc] = useState<string>(src)

    return (
        <div className={styles['container']}>
            <NextImage
                className={styles['image']}
                src={isLoading ? '/image/gray-image.png' : displaySrc}
                alt={alt}
                fill
                sizes="100%"
                loading="lazy"
                onLoad={() => {
                    setIsLoading(false)
                }}
                onError={() => {
                    setDisplaySrc('/image/gray-image.png')
                }}
            />
        </div>
    )
}
