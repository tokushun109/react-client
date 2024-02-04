import Button from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
    component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: { children: <div>children</div> },
}
