# paper-rulings

[![Build Status][travis-image]][travis-url]
[![Coverage][coveralls-image]][coveralls-url]

Measurements and information about paper rulings

## Installation

```
npm install --save paper-rulings
```

## Usage

```javascript
const paperRulings = require('paper-rulings')

console.log(JSON.stringify(paperRulings('gregg'), null, 2))
```

### Output

```
{
  "names": [
    "Gregg"
  ],
  "spacing": "11/32 in",
  "margins": [
    {
      "left": "50%"
    }
  ],
  "notes": "Used for stenography. Includes a single margin down the center of the page."
}
```

## API

### `paperRulings(rulingName)`

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

## Resources

- https://en.wikipedia.org/wiki/Ruled_paper

## License

MIT © [Forrest Desjardins](https://github.com/fdesjardins)

[travis-url]: https://travis-ci.org/fdesjardins/paper-rulings
[travis-image]: https://img.shields.io/travis/fdesjardins/paper-rulings.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdesjardins/paper-rulings
[coveralls-image]: https://img.shields.io/coveralls/fdesjardins/paper-rulings.svg?style=flat
