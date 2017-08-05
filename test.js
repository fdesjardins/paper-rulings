/* global describe, it */

const assert = require('chai').assert
const Fraction = require('fraction.js')

const paperRuling = require('./index')

describe('paper-ruling', () => {
  it('should have Narrow ruling', done => {
    assert(paperRuling('narrow') !== undefined)
    done()
  })
  it('should have College ruling', done => {
    assert(paperRuling('college') !== undefined)
    done()
  })
  it('should have Gregg ruling', done => {
    assert(paperRuling('gregg') !== undefined)
    done()
  })
  it('should have Legal ruling', done => {
    assert(paperRuling('legal') !== undefined)
    done()
  })
  it('should have Pitman ruling', done => {
    assert(paperRuling('Pitman') !== undefined)
    done()
  })
  it('should have Quad ruling', done => {
    assert(paperRuling('quad') !== undefined)
    done()
  })

  it('should not have undefined rulings', done => {
    assert(paperRuling('old gregg') === undefined)
    assert(paperRuling('curly jefferson') === undefined)
    assert(paperRuling('mr hopkins') === undefined)
    assert(paperRuling('howard moon') === undefined)
    done()
  })

  describe('inputs', () => {
    it('should accept variable string cases', done => {
      assert(paperRuling('COLLEGE') !== undefined)
      assert(paperRuling('LeGaL') !== undefined)
      assert(paperRuling('GREGG') !== undefined)
      done()
    })

    it('should accept alternative names', done => {
      assert(paperRuling('wide') !== undefined)
      assert(paperRuling('medium') !== undefined)
      done()
    })
  })

  describe('options', () => {
    describe('formats', () => {
      it('should allow choosing decimals vs fractions', done => {
        const cases = {
          narrow: paperRuling('narrow', { format: 'decimal' }),
          college: paperRuling('college', { format: 'decimal' }),
          gregg: paperRuling('gregg', { format: 'decimal' }),
          legal: paperRuling('legal', { format: 'decimal' }),
          pitman: paperRuling('pitman', { format: 'decimal' })
        }
        assert(cases.narrow.spacing === `${Fraction('1/4')} in`)
        assert(cases.college.spacing === `${Fraction('9/32')} in`)
        assert(cases.gregg.spacing === `${Fraction('11/32')} in`)
        assert(cases.legal.spacing === `${Fraction('11/32')} in`)
        assert(cases.pitman.spacing === `${Fraction('1/2')} in`)
        done()
      })
    })

    describe('units', () => {
      it('should allow choosing units', done => {
        const mm = paperRuling('college', { format: 'decimal', units: 'mm' })
        const cm = paperRuling('college', { format: 'decimal', units: 'cm' })
        const yd = paperRuling('college', { format: 'decimal', units: 'yd' })
        assert(mm.spacing === '7.143749771400008 mm')
        assert(cm.spacing === '0.7143749771400008 cm')
        assert(yd.spacing === '0.0078125 yd')
        done()
      })
    })
  })

  it('should not accept unknown formats', done => {
    assert.throws(() => paperRuling('narrow', { format: 'unknown' }))
    done()
  })

  it('should accept known formats', done => {
    assert(paperRuling('narrow', { format: 'fraction' }) !== undefined)
    assert(paperRuling('narrow', { format: 'decimal' }) !== undefined)
    done()
  })
})
