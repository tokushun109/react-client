import 'ress'

import Footer from '@/components/templates/Footer'
import Header from '@/components/templates/Header'
import { mainFontFace } from '@/utils/font'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <body className={mainFontFace.className}>
            <Header />
            <main>{children}</main>
            <Footer />
        </body>
    )
}
