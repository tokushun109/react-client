import { ColorEnum, ColorType } from '@/types'
import Icon from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Icon> = {
    component: Icon,
}

export default meta
type Story = StoryObj<typeof Icon>

const renderIcon = (color: ColorType, contrast: boolean = false) => (
    <Icon color={color} size={80} contrast={contrast}>
        <span style={{ fontSize: 14 }}>{color}</span>
    </Icon>
)

export const Primary: Story = {
    render: () => renderIcon(ColorEnum.Primary),
}

export const Secondary: Story = {
    render: () => renderIcon(ColorEnum.Secondary),
}

export const Accent: Story = {
    render: () => renderIcon(ColorEnum.Accent),
}
