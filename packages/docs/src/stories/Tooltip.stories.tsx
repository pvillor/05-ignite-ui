import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@villo-ignite-ui/react'

export default {
  title: 'Info/Tooltip',
  component: Tooltip,
  argTypes: {
    children: {
      control: 'text'
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    children: <button>21</button>,
    content: '21 de Outubro de 2024 - Disponível'
  }
}
