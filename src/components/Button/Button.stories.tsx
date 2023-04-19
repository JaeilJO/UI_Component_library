import type {Meta, StoryObj} from '@storybook/react'
import Button from './Button'


const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button
}

type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    args:{
      role:'Primary',
    },
    render: () => <Button>Hello</Button>,
};



export  default meta
