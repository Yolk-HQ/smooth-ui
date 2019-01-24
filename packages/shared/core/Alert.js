import PropTypes from 'prop-types'
import { darken } from 'polished'
import { css } from './styled-engine'
import {
  th,
  mixin,
  colorLevel,
  colorVariant,
  borderRadius,
} from './theming/index'
import createComponent from './utils/createComponent'

const alertPaddingY = th('alertPaddingY', '.75rem')
const alertPaddingX = th('alertPaddingX', '1.25rem')
const alertMarginBottom = th('alertMarginBottom', '1rem')

const alertColorLevel = th('alertColorLevel', 6)
const alertBgLevel = th('alertBgLevel', -10)
const alertBorderLevel = th('alertBorderLevel', -9)

const alertVariant = mixin('alertVariant', p => variant => {
  const variantColor = colorVariant(variant)(p)
  const color = colorLevel(variantColor, alertColorLevel(p))(p)
  const bgColor = colorLevel(variantColor, alertBgLevel(p))(p)
  const borderColor = colorLevel(variantColor, alertBorderLevel(p))(p)
  const hrColor = darken(0.05, color)

  return css`
    color: ${color};
    background-color: ${bgColor};
    border-color: ${borderColor};

    hr {
      border-top-color: ${hrColor};
    }
  `
})

const Alert = createComponent({
  name: 'alert',
  omitProps: ['variant'],
  style: p => css`
    position: relative;
    padding: ${alertPaddingY(p)} ${alertPaddingX(p)};
    margin-bottom: ${alertMarginBottom(p)};
    border: 1px solid transparent;
    border-radius: ${borderRadius(p)};
    ${p.variant && alertVariant(p.variant)(p)};
  `,
  propTypes: {
    children: PropTypes.node,
    variant: PropTypes.string,
  },
  defaultProps: {
    variant: 'primary',
  },
})

export default Alert
