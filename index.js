"use strict"

const arrayUniq = require("array-uniq")
const deepEqual = require("deep-equal")
const { default: ow } = require("ow")

module.exports = (array) => {
	ow(array, ow.iterable)
	return deepEqual(array, arrayUniq(array))
}
