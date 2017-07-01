const paperRulings = require('./')

console.log(JSON.stringify(paperRulings('quad', { format: 'decimal', units: 'mm' }), null, 2))
