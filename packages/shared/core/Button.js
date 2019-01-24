import PropTypes from 'prop-types'
import { darken } from 'polished'
import { css } from './styled-engine'
import {
  th,
  mixin,
  inputBtnPaddingY,
  inputBtnPaddingX,
  inputBtnLineHeight,
  inputBtnPaddingYSm,
  inputBtnPaddingXSm,
  inputBtnLineHeightSm,
  inputBtnPaddingYLg,
  inputBtnPaddingXLg,
  inputBtnLineHeightLg,
  fontSizeSm,
  borderRadiusSm,
  fontSizeBase,
  borderRadius,
  fontSizeLg,
  borderRadiusLg,
  zIndexControl,
  transitionBase,
  colorYik,
  controlFocus,
  colorVariant,
} from './theming/index'
import createComponent from './utils/createComponent'

const btnPaddingY = th('btnPaddingY', inputBtnPaddingY)
const btnPaddingX = th('btnPaddingX', inputBtnPaddingX)
const btnLineHeight = th('btnLineHeight', inputBtnLineHeight)

const btnPaddingYSm = th('btnPaddingYSm', inputBtnPaddingYSm)
const btnPaddingXSm = th('btnPaddingXSm', inputBtnPaddingXSm)
const btnLineHeightSm = th('btnLineHeightSm', inputBtnLineHeightSm)

const btnPaddingYLg = th('btnPaddingYLg', inputBtnPaddingYLg)
const btnPaddingXLg = th('btnPaddingXLg', inputBtnPaddingXLg)
const btnLineHeightLg = th('btnLineHeightLg', inputBtnLineHeightLg)

const btnBorderWidth = th('btnBorderWidth', 0)
const btnDisabledOpacity = th('btnDisabledOpacity', 0.8)

const btnSize = {
  sm: p => css`
    padding: ${btnPaddingYSm(p)} ${btnPaddingXSm(p)};
    font-size: ${fontSizeSm(p)};
    border-radius: ${borderRadiusSm(p)};
    line-height: ${btnLineHeightSm(p)};
  `,
  md: p => css`
    padding: ${btnPaddingY(p)} ${btnPaddingX(p)};
    font-size: ${fontSizeBase(p)};
    border-radius: ${borderRadius(p)};
    line-height: ${btnLineHeight(p)};
  `,
  lg: p => css`
    padding: ${btnPaddingYLg(p)} ${btnPaddingXLg(p)};
    font-size: ${fontSizeLg(p)};
    border-radius: ${borderRadiusLg(p)};
    line-height: ${btnLineHeightLg(p)};
  `,
}

const btnVariant = mixin('btnVariant', p => variant => {
  const color = colorVariant(variant)(p)
  return css`
    color: ${colorYik(color)(p)};
    background-color: ${color};

    &:focus {
      ${controlFocus(color)(p)};
    }

    &:not(:disabled):hover,
    &:not(:disabled):active {
      background-color: ${darken(0.05, color)};
    }
  `
})

const Button = createComponent({
  name: 'button',
  defaultComponent: 'button',
  omitProps: ['size', 'variant'],
  style: p => css`
    display: inline-block;
    z-index: ${zIndexControl(p)};
    border-width: ${btnBorderWidth(p)};
    cursor: pointer;

    ${transitionBase(p)};

    /* When used as link */
    text-decoration: none;

    &:disabled {
      opacity: ${btnDisabledOpacity(p)};
    }

    ${p.size && btnSize[p.size](p)};
    ${p.variant && btnVariant(p.variant)(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    variant: PropTypes.string,
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
})

export default Button
