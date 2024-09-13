import * as Toast from '@radix-ui/react-toast';
import { styled } from '@stitches/react';
import { keyframes } from '../../styles';

const slideIn = keyframes({
  from: {
    transform: 'translateY(-10%)',
  },
  to: {
    transform: 'translateY(104px)',
  },
})

const slideOut = keyframes({
  from: {
    transform: 'translateY(104px)',
  },
  to: {
    transform: 'translateY(-10%)',
  },
})

export const ToastContainer = styled(Toast.Root, {
  listStyleType: 'none',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '6px',

  width: '320px',

  position: 'absolute',
  bottom: '$8',
  right: '$8',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$1',

  padding: '$3 $5',

  fontFamily: 'Roboto, sans-serif',

  '&[data-state="open"]': {
    animation: `${slideOut} 100ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideIn} 100ms ease-out`,
  },
})

export const ToastTitleContainer = styled(Toast.Title, {
  color: '$white',

  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$tall',
})

export const ToastDescriptionContainer = styled(Toast.Description, {
  color: '$gray200',

  fontWeight: '$regular',
  fontSize: '$sm',
  lineHeight: '$base'
})

export const ToastCloseContainer = styled(Toast.Close, {
  position: 'absolute',

  top: '$4',
  right: '$4',

  background: 'transparent',
  border: 'transparent',

  color: '$gray200',

  '&:hover': {
    cursor: 'pointer'
  }
})
