'use strict'

const makeEslintrc = require('./eslintrc.make')

function _interopDefaultLegacy (e) {
	return e && typeof e === 'object' && 'default' in e ? e : { 'default': e } 
}

const makeEslintrc__default = /*#__PURE__*/_interopDefaultLegacy(makeEslintrc)

const IMPORTANT = 'IMPORTANT'
const HELPFUL = 'HELPFUL'
const TASTE = 'TASTE'

const eslintrc_all = makeEslintrc__default['default'](IMPORTANT, HELPFUL, TASTE)

module.exports = eslintrc_all
