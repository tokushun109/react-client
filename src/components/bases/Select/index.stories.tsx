import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '.'

// TODO storybook側でressを効かせる
// TODO storybook側でデフォルトフォントを効かせる

const meta: Meta<typeof Select> = {
    component: Select,
    args: {
        title: 'title',
        options: [1, 2, 3].map((i) => ({ value: `value${i}`, label: `label${i}` })),
        initialSelectedIndex: 0,
        onClick: () => {
            console.log('clickしました')
        },
    },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}
