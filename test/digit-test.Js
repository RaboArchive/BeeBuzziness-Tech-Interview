const expect = require('chai').expect
const tools = require('../modules/tools')

const digits = tools.convert('0123456789')

describe('digit', () => { 
  describe('.getDigit', () => {
    it('expect to return the correct value', () => {
      const correctValues = [0x3F, 0x06, 0x5B, 0x4F, 0x66, 0x6D, 0x7D, 0x07, 0x7F, 0x6F]
      for (let i = 0; i < digits.length; i++) {
        expect(digits[i].digit).to.equal(correctValues[i])
      }
    })
  })
  describe('.isSegmentOn', () => {
    it('expect to return state of the bit', () => {
        expect(digits[0].isSegmentOn(0)).to.equal(1)
        expect(digits[0].isSegmentOn(6)).to.equal(0)
        expect(digits[0].isSegmentOn(7)).to.equal(0)

        expect(digits[8].isSegmentOn(1)).to.equal(1)
        expect(digits[8].isSegmentOn(5)).to.equal(1)

        expect(digits[5].isSegmentOn(1)).to.equal(0)
        expect(digits[5].isSegmentOn(6)).to.equal(1)
    })
  })
})
