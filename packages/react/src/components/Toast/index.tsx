import { ComponentProps } from "react";
import { ToastCloseContainer, ToastContainer, ToastDescriptionContainer, ToastTitleContainer } from "./styles";
import { ToastProvider, ToastProviderProps, ToastViewport } from "@radix-ui/react-toast";

export interface ToastTitleProps extends ComponentProps<typeof ToastTitleContainer> {}

export function ToastTitle({ children, ...props }: ToastTitleProps) {
  return (
    <ToastTitleContainer {...props}>
      {children}
    </ToastTitleContainer>
  )
}

export interface ToastDescriptionProps extends ComponentProps<typeof ToastDescriptionContainer> {}

export function ToastDescription({ children, ...props }: ToastDescriptionProps) {
  return (
    <ToastDescriptionContainer {...props}>
      {children}
    </ToastDescriptionContainer>
  )
}

export interface ToastCloseProps extends ComponentProps<typeof ToastCloseContainer> {}

export function ToastClose({ children, ...props }: ToastCloseProps) {
  return (
    <ToastCloseContainer {...props}>
      {children}
    </ToastCloseContainer>
  )
}

export interface ToastProps extends ComponentProps<typeof ToastContainer> {}

export function ToastRoot({children, ...props}: ToastProps) {
  return (
      <ToastContainer {...props}>
        {children}
      </ToastContainer>
  )
}

export function Toast({ children }: ToastProviderProps) {
  return (
    <ToastProvider swipeDirection="right">
      {children}
      <ToastViewport />
    </ToastProvider>
  )
}