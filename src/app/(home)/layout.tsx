import 'ress'

import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
