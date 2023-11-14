import 'ress'

import '@/styles/globals.scss'
import classNames from 'classnames'
import { Metadata } from 'next'

import { getCreator } from '@/apis/creator'
import Footer from '@/components/templates/Footer'
import Header from '@/components/templates/Header'
import { mainFontFace } from '@/utils/font'

import styles from './layout.module.scss'

export async function generateMetadata(): Promise<Metadata> {
    const title = 'アクセサリーショップ とこりり'
    const creator = await getCreator()
    const description = creator && creator.introduction ? creator.introduction : ''
    const image = creator && creator.apiPath ? creator.apiPath : ''
    return {
        metadataBase: new URL(process.env.DOMAIN_URL || ''),
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            images: [image],
        },
        twitter: {
            title,
            description,
            images: [image],
        },
    }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body className={classNames(styles['container'], mainFontFace.className)}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
