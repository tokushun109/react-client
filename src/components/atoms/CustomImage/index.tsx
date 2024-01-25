import Image from 'next/image'
import { useState } from 'react'

type Props = {
    src: string
    alt: string
}

const CustomImage = ({ src, alt }: Props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [displaySrc, setDisplaySrc] = useState<string>(src)

    return (
        <div
            style={{
                position: 'relative',
                height: '100%',
                width: '100%',
            }}
        >
            <Image
                src={isLoading ? '/image/gray-image.png' : displaySrc}
                alt={alt}
                fill
                sizes="100%"
                style={{ objectFit: 'cover', zIndex: 0, borderRadius: 12 }}
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

export default CustomImage
