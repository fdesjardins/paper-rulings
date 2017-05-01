/* global describe, it */

const assert = require('chai').assert
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
})
