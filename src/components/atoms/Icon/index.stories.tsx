import { ColorEnum, ColorType } from '@/types'
import Icon, { Props } from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Icon> = {
    component: Icon,
    args: {
        color: ColorEnum.Primary,
        size: 80,
        children: 'Icon',
        onClick: () => {
            console.log('clickしました')
        },
    },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {}
