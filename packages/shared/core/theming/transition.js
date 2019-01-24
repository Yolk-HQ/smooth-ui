import { css } from '../styled-engine'
import { th, mixin } from './value'

export const safeTransitionAttrs = [
  'color',
  'border-style',
  'visibility',
  'background',
  'background-color',
  'text-decoration',
  'box-shadow',
  'transform',
  'opacity',
]

export const transitionEnabled = th('transitionEnabled', true)
export const transitionDuration = th('transitionDuration', '.2s')
export const transitionEasingFunc = th('transitionEasingFunc', 'ease-in-out')

export const transition = mixin('transition', p => value => {
  if (!transitionEnabled(p)) return null
  return css`
    transition: ${value};

    @media screen and (prefers-reduced-motion: reduce) {
      transition: none;
    }
  `
})

export const transitionBase = th('transitionBase', p =>
  transition(
    safeTransitionAttrs
      .map(
        attr => `${attr} ${transitionDuration(p)} ${transitionEasingFunc(p)}`,
      )
      .join(','),
  )(p),
)
