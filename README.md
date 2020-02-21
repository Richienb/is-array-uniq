# Is Array Uniq [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/is-array-uniq/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/is-array-uniq)

Check if all the items in an array are unique.

[![NPM Badge](https://nodei.co/npm/is-array-uniq.png)](https://npmjs.com/package/is-array-uniq)

## Install

```sh
npm install is-array-uniq
```

## Usage

```js
const isArrayUniq = require("is-array-uniq");

isArrayUniq([1, 2]);
//=> true

isArrayUniq([1, 1]);
//=> false
```

## API

### isArrayUniq(array)

#### array

Type: `arrayLike`

The array to check.
