import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '.'
import { KeyboardArrowDown } from '@mui/icons-material'

const meta: Meta<typeof Select> = {
    component: Select,
    args: {
        title: 'title',
        options: [1, 2, 3].map((i) => ({ value: `value${i}`, label: `label${i}` })),
        initialSelectedIndex: 0,
        suffix: <KeyboardArrowDown />,
        onSelect: (index: number) => {
            console.log(`${index}番目をclickしました`)
        },
    },
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {}
