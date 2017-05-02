# paper-rulings

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-image]][npm-url]
[![Coverage][coveralls-image]][coveralls-url]

Measurements and information about paper rulings

## Installation

```
npm install --save paper-rulings
```

## Usage

```javascript
const paperRulings = require('paper-rulings')

console.log(JSON.stringify(paperRulings('gregg', { format: 'decimal', units: 'mm' }), null, 2))
```

### Output

```
{
  "names": [
    "Gregg"
  ],
  "spacing": "8.730823935791932 mm",
  "margins": [
    {
      "left": "50%"
    }
  ],
  "notes": "Used for stenography. Includes a single margin down the center of the page."
}
```

## API

### `paperRulings(rulingName, options)`

#### `rulingName`

Type: `string`

One of the following:

- Narrow
- Medium
- College
- Wide
- Legal
- Gregg
- Pitman

#### `options`

Type: `object`

##### `options.format`

Allows you to specify the output values formats

Type: `string`

One of the following:

- fraction
- decimal

##### `options.units`

Specify the output measurement units

Type: `string`

One of the following:

- mm
- cm
- m
- in
- ft
- mi

## Change Log

#### [v1.2.0] - 2017-04-30

- added unit conversions and `units` field in `options`

#### [v1.1.0] - 2017-04-30

- added decimal/fraction output formats and `format` field in `options`
- improved options validation and handling

#### [v1.0.0] - 2017-04-30

- initial release

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[npm-url]: https://www.npmjs.com/package/paper-rulings
[npm-image]: https://img.shields.io/npm/v/paper-rulings.svg?style=flat
[travis-url]: https://travis-ci.org/fdesjardins/paper-rulings
[travis-image]: https://img.shields.io/travis/fdesjardins/paper-rulings.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/paper-rulings
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/paper-rulings.svg?style=flat

[v1.2.0]: https://github.com/fdesjardins/paper-rulings/compare/v1.1.0...v1.2.0
[v1.1.0]: https://github.com/fdesjardins/paper-rulings/compare/v1.0.0...v1.1.0
[v1.0.0]: https://github.com/fdesjardins/paper-rulings/tree/v1.0.0
