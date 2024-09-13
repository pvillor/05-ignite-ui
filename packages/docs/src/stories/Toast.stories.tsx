import { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastClose, ToastDescription, ToastProps, ToastRoot, ToastTitle } from '@villo-ignite-ui/react'
import { X } from 'phosphor-react';
import { useState } from 'react';

export default {
  title: 'Info/Toast',
  component: Toast,
  argTypes: {
    children: { 
      control: false
     }
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  render: () => {
    const [open, setOpen] = useState(false);

    const handleButtonClick = () => {
      setOpen(true);
      setTimeout(() => setOpen(false), 3000); // Exibe o toast por 3 segundos
    };

    return (
      <Toast>
        <Button onClick={handleButtonClick}>Confirmar</Button>

        <ToastRoot open={open} onOpenChange={setOpen}>
          <ToastTitle>Agendamento realizado</ToastTitle>
          <ToastDescription>Quarta-feira, 23 de Outubro às 16h</ToastDescription>
          <ToastClose asChild>
            <X size={20} />
          </ToastClose>
        </ToastRoot>
      </Toast>
    );
  }
}
