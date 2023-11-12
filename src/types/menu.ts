import { capitalize } from '@/utils/string'
import { Email, Diamond, Face3 } from '@mui/icons-material'
import { ComponentType } from 'react'

export const MenuEnum = {
    About: 'about',
    Product: 'product',
    Contact: 'contact',
} as const

export type MenuType = (typeof MenuEnum)[keyof typeof MenuEnum]

type MenuObject = {
    icon: ComponentType
    label: string
    link: string
}

export const MenuList: { [_ in MenuType]: MenuObject } = {
    [MenuEnum.About]: {
        icon: Face3,
        label: capitalize(MenuEnum.About),
        link: '/' + MenuEnum.About,
    },
    [MenuEnum.Product]: {
        icon: Diamond,
        label: capitalize(MenuEnum.Product),
        link: '/' + MenuEnum.Product,
    },
    [MenuEnum.Contact]: {
        icon: Email,
        label: capitalize(MenuEnum.Contact),
        link: '/' + MenuEnum.Contact,
    },
} as const
