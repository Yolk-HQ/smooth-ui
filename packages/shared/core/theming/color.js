import { mix, parseToRgb } from 'polished'
import { th, mixin } from './value'

export const black = th('black', '#000')
export const white = th('white', '#000')

export const gray100 = th('gray100', '#f8f9fa')
export const gray200 = th('gray200', '#e9ecef')
export const gray300 = th('gray300', '#dee2e6')
export const gray400 = th('gray400', '#ced4da')
export const gray500 = th('gray500', '#adb5bd')
export const gray600 = th('gray600', '#6c757d')
export const gray700 = th('gray700', '#495057')
export const gray800 = th('gray800', '#343a40')
export const gray900 = th('gray900', '#212529')

export const blue = th('blue', '#007bff')
export const indigo = th('indigo', '#6610f2')
export const purple = th('purple', '#6f42c1')
export const pink = th('pink', '#e83e8c')
export const red = th('red', '#dc3545')
export const brick = th('brick', '#bd4932')
export const orange = th('orange', '#fd7e14')
export const yellow = th('yellow', '#ffc107')
export const green = th('green', '#28a745')
export const teal = th('teal', '#20c997')
export const cyan = th('cyan', '#17a2b8')

export const primary = th('primary', brick)
export const secondary = th('secondary', gray600)
export const success = th('success', green)
export const info = th('info', cyan)
export const warning = th('warning', yellow)
export const danger = th('danger', red)
export const light = th('light', gray100)
export const dark = th('dark', gray800)

const colors = {
  black,
  white,
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  gray700,
  gray800,
  gray900,
  blue,
  indigo,
  purple,
  pink,
  red,
  brick,
  orange,
  yellow,
  green,
  teal,
  cyan,
  primary,
  secondary,
  success,
  info,
  warning,
  danger,
  light,
  dark,
}

export const colorInterval = th('colorInterval', 0.08)

export const colorVariant = mixin('colorVariant', p => variant => {
  const thValue = th(variant)(p)
  if (thValue) return thValue
  const colorValue = colors[variant]
  if (colorValue) return colorValue(p)
  return variant
})

export const colorLevel = mixin('colorLevel', p => (color, level) => {
  const baseColor = level > 0 ? black(p) : white(p)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval(p), baseColor, color)
})

export const yiqContrastedThreshold = th('yiqContrastedThreshold', 150)
export const yikTextDark = th('yikTextDark', '#111')
export const yikTextLight = th('yikTextLight', '#fff')

export const colorYik = mixin('colorLevel', p => color => {
  const { red: r, green: g, blue: b } = parseToRgb(color)
  const yik = (r * 299 + g * 587 + b * 114) / 1000
  return yik >= yiqContrastedThreshold(p) ? yikTextDark(p) : yikTextLight(p)
})
