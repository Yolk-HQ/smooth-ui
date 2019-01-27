import { th } from './value'
import {
  inputBtnPaddingY,
  inputBtnPaddingX,
  inputBtnLineHeight,
  inputBtnPaddingYSm,
  inputBtnPaddingXSm,
  inputBtnLineHeightSm,
  inputBtnPaddingYLg,
  inputBtnPaddingXLg,
  inputBtnLineHeightLg,
} from './control'
import { borderWidth } from './border'
import { gray300, white, gray100, gray600, gray900 } from './color'

export const inputPaddingY = th('inputPaddingY', inputBtnPaddingY)
export const inputPaddingX = th('inputPaddingX', inputBtnPaddingX)
export const inputLineHeight = th('inputLineHeight', inputBtnLineHeight)

export const inputPaddingYSm = th('inputPaddingYSm', inputBtnPaddingYSm)
export const inputPaddingXSm = th('inputPaddingXSm', inputBtnPaddingXSm)
export const inputLineHeightSm = th('inputLineHeightSm', inputBtnLineHeightSm)

export const inputPaddingYLg = th('inputPaddingYLg', inputBtnPaddingYLg)
export const inputPaddingXLg = th('inputPaddingXLg', inputBtnPaddingXLg)
export const inputLineHeightLg = th('inputLineHeightLg', inputBtnLineHeightLg)

export const inputBorderWidth = th('inputBorderWidth', borderWidth)
export const inputBorderColor = th('inputBorderColor', gray300)
export const inputBgColor = th('inputBgColor', white)
export const inputDisabledBgColor = th('inputDisabledBgColor', gray100)
export const inputDisabledText = th('inputDisabledText', gray600)
export const inputPlaceholderText = th('inputPlaceholderText', gray600)
export const inputTextColor = th('inputTextColor', gray900)
