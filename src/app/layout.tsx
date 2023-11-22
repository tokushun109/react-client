import 'ress'

import '@/styles/globals.scss'
import { mainFontFace } from '@/utils/font'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={mainFontFace.className}>{children}</body>
        </html>
    )
}
