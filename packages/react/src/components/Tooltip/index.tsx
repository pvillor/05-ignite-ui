import { Provider as TooltipProvider, TooltipTrigger, TooltipPortal } from '@radix-ui/react-tooltip'
import { ComponentProps } from "react";
import { TooltipArrow, TooltipContainer, TooltipContent } from "./styles";

export interface TooltipProps extends ComponentProps<typeof TooltipContent> { 
  content: string
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipContainer>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props} >
            <span>{content}</span>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}