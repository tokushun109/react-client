import 'ress'

import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
