"use strict"

const arrayUniq = require("array-uniq")

module.exports = array => {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`)
	}

	return array.length === arrayUniq(array).length
}
