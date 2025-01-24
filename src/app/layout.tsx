import 'ress'

import '@/styles/globals.scss'
import { Metadata } from 'next'

import { mainFontFace } from '@/utils/font'

import Favicon from '/public/favicon/favicon.ico'

export const metadata: Metadata = {
    icons: [{ rel: 'icon', url: Favicon.src }],
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="ja">
            <body className={mainFontFace.className}>{children}</body>
        </html>
    )
}

export default RootLayout
