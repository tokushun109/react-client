'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

import { NavigationType } from '@/types'

interface Props {
    children: React.ReactNode
}
export const PageFadeTransition = ({ children }: Props) => {
    const pathname = usePathname() as NavigationType

    return (
        <div key={pathname}>
            <AnimatePresence mode="wait">
                <motion.div animate={{ opacity: 1 }} exit={{ opacity: 0 }} initial={{ opacity: 0 }} key={pathname} transition={{ duration: 0.5 }}>
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
