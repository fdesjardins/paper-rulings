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

module.exports = (ruling, options) => {
  const input = ruling
    .toString()
    .toLowerCase()
    .trim()

  if (input === 'narrow') {
    return rulings.narrow
  }
  if (input === 'college' || input === 'medium') {
    return rulings.college
  }
  if (input === 'gregg') {
    return rulings.gregg
  }
  if (input === 'legal' || input === 'wide') {
    return rulings.college
  }
  if (input === 'pitman') {
    return rulings.pitman
  }
}
