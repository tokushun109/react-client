import 'ress'

import '@/styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <html lang="ja">{children}</html>
}
