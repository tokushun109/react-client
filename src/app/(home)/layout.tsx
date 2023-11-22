import 'ress'

import Footer from '@/components/templates/Footer'
import Header from '@/components/templates/Header'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
