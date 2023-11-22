'use client'

import classNames from 'classnames'
import { usePathname } from 'next/navigation'

import Footer from '@/components/templates/Footer'
import Header from '@/components/templates/Header'
import { NavigationTitleEnum, NavigationType } from '@/types/enum/navigation'
import { labelFontFace } from '@/utils/font'

import styles from './layout.module.scss'

export default function DetailsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() as NavigationType

    return (
        <div className={styles['container']}>
            <Header />
            <main className={styles['main']}>
                <div className={classNames(styles['title'], styles['default'], labelFontFace.className)}>{NavigationTitleEnum[pathname]}</div>
                {children}
            </main>
            <Footer />
        </div>
    )
}
