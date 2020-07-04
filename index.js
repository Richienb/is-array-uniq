"use strict"

const arrayUniq = require("array-uniq")
const isObjectEqual = require("fast-deep-equal/es6")

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	return isObjectEqual(array, arrayUniq(array))
}
