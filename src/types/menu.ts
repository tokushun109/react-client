import { Email, Diamond, Face3 } from '@mui/icons-material'
import { ComponentType } from 'react'

type MenuType = {
    icon: ComponentType
    label: string
    link: string
}

export const MenuList: MenuType[] = [
    {
        icon: Face3,
        label: 'About',
        link: '/about',
    },
    {
        icon: Diamond,
        label: 'Product',
        link: '/product',
    },
    {
        icon: Email,
        label: 'Contact',
        link: '/contact',
    },
]
