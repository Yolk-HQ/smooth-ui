const is = n => n !== undefined && n !== null
const func = n => typeof n === 'function'

const get = (obj, ...paths) =>
  paths
    .join('.')
    .split('.')
    .reduce((a, b) => (a && is(a[b]) ? a[b] : undefined), obj)

const cascade = (fn, ...args) => {
  if (!func(fn) || fn.length > 1) return fn
  const next = fn(...args)
  return cascade(next, ...args)
}

const getTheme = p => p.theme || {}

export const th = (name, defaultValue, transform) => p => {
  const value = cascade(p => get(getTheme(p), name), p)
  if (value === undefined) {
    return cascade(defaultValue, p)
  }
  if (transform) {
    return transform(value)
  }
  return value
}

export const mixin = (name, defaultFn) => (...args) => p => {
  const fn = get(getTheme(p), name) || defaultFn
  return fn(p)(...args)
}
