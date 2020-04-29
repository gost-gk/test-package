## is-eq-two
[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

A simple module to test if a given object is number 2

## Install

```bash
$ npm install is-eq-two
```

## Usage

```js
const is2 = require('is-eq-two');

is2(2);
// Returns true

is2(-1);
// Returns false

is2(null);
// Returns false

is2("2");
// Returns false

```

## Tests

```bash
$ npm test
```