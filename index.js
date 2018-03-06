'use strict'

const copyOwn = require('copy-own')

module.exports = function ownAll (obj, opt = {}) {
  opt.overwrite = false
  const props = {}
  while (obj) {
    copyOwn(obj, props, opt)
    obj = Object.getPrototypeOf(obj)
  }
  return props
}
