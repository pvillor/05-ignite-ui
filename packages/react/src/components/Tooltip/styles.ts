import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from "@stitches/react";

export const TooltipContainer = styled(Tooltip.Root, {
  width: '$64',
  height: '$16',
  display: 'flex',
  flexDirection: 'column'
})

export const TooltipContent = styled(Tooltip.Content, {
  color: '$gray100',
  backgroundColor: '$gray900',
  fontWeight: '$medium',
  fontSize: '$sm',
  fontFamily: 'Inter, sans-serif',
  textAlign: 'center',
  lineHeight: '$short',
  padding: '$3 $4',
  borderRadius: '5px',
  opacity: 0.75,

  display: 'flex',
  gap: '$2'
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  width: '100%',
  height: '$2',
  fill: '$gray900'
})