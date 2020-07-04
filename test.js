const test = require("ava")
const isArrayUniq = require(".")

test("main", t => {
	t.true(isArrayUniq([1, 2]))
	t.false(isArrayUniq([1, 1]))
})
