import 'ress'

import '@/styles/globals.scss'
import { Metadata } from 'next'

import { mainFontFace } from '@/utils/font'

import Favicon from '/public/favicon/favicon.ico'

// robotoのfont-weight
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

export const metadata: Metadata = {
    icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={mainFontFace.className}>{children}</body>
        </html>
    )
}
