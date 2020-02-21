/**
 * Check if all the items in an array are unique.
 * @param array The array to check.
 * @example
 * ```
 * const isArrayUniq = require("is-array-uniq");
 *
 * isArrayUniq([1, 2]);
 * //=> true
 *
 * isArrayUniq([1, 1]);
 * //=> false
 * ```
*/
declare function isArrayUniq(array: ArrayLike<any>): boolean

export = isArrayUniq
