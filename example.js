const paperRulings = require('./')

console.log(JSON.stringify(paperRulings('gregg', { format: 'decimal', units: 'mm' }), null, 2))
