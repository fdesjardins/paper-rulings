const Fraction = require('fraction.js')

const rulings = {
  narrow: {
    names: [ 'Narrow' ],
    spacing: '1/4 in',
    notes: 'Used to fit more lines per page, or by those with small hands.'
  },
  college: {
    names: [ 'College', 'Medium' ],
    spacing: '9/32 in',
    margins: [
      {
        left: '1-1/4 in'
      }
    ],
    notes: ''
  },
  gregg: {
    names: [ 'Gregg' ],
    spacing: '11/32 in',
    margins: [
      {
        left: '50%'
      }
    ],
    notes: 'Used for stenography. Includes a single margin down the center of the page.'
  },
  legal: {
    names: [ 'Legal', 'Wide' ],
    spacing: '11/32 in',
    margins: [
      {
        left: '1-1/4 in'
      }
    ],
    notes: 'Used by those with larger handwriting'
  },
  pitman: {
    names: [ 'Pitman' ],
    spacing: '1/2 in',
    margins: [
      {
        left: '50%'
      }
    ],
    notes: 'Used for stenography. Includes a single margin down the center of the page.'
  }
}

const spacingToDecimal = spacing => {
  return `${Fraction(spacing.split(' ')[0]) + 0} ${spacing.split(' ')[1]}`
}

module.exports = (ruling, options) => {
  const input = ruling
    .toString()
    .toLowerCase()
    .trim()

  let out
  if (input === 'narrow') {
    out = rulings.narrow
  }
  if (input === 'college' || input === 'medium') {
    out = rulings.college
  }
  if (input === 'gregg') {
    out = rulings.gregg
  }
  if (input === 'legal' || input === 'wide') {
    out = rulings.legal
  }
  if (input === 'pitman') {
    out = rulings.pitman
  }

  if (options !== undefined) {
    if (options.format !== undefined) {
      if (options.format === 'decimal') {
        out = Object.assign({}, out, { spacing: spacingToDecimal(out.spacing) })
      } else if (options.format !== 'fraction') {
        throw new Error('only "decimal" or "fraction" are accepted formats')
      }
    }
  }

  return out
}
