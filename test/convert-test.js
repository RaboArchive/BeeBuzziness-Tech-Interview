const expect = require('chai').expect
const tools = require('../modules/tools') 
const Digit = require('../modules/digit')

describe('tools', () => {
  describe('.convert', () => {
    it('expect to return correct value in array with correct value', () => {
      let validInput = [
        {test: '000', answer: [new Digit(0x3F), new Digit(0x3F), new Digit(0x3F)]},
        {test: '123', answer: [new Digit(0x06), new Digit(0x5B), new Digit(0x4F)]},
        {test: '456', answer: [new Digit(0x66), new Digit(0x6D), new Digit(0x7D)]},
        {test: '666', answer: [new Digit(0x7D), new Digit(0x7D), new Digit(0x7D)]},
        {test: '739', answer: [new Digit(0x07), new Digit(0x4F), new Digit(0x6F)]},
        {test: '999', answer: [new Digit(0x6F), new Digit(0x6F), new Digit(0x6F)]}
      ]
      for (let i = 0; i < validInput.length; i++) {
        expect(tools.convert(validInput[i].test)).to.deep.equal(validInput[i].answer)
      }
    })
    it('expect to correct wrong value', () => {
      let invalidInput = [
        {test: 'abc', answer: [new Digit(0x3F), new Digit(0x3F), new Digit(0x3F)]},
        {test: '2a4', answer: [new Digit(0x5B), new Digit(0x3F), new Digit(0x66)]},
        {test: '44t', answer: [new Digit(0x66), new Digit(0x66), new Digit(0x3F)]}
      ]
      for (let i = 0; i < invalidInput.length; i++) {
        expect(tools.convert(invalidInput[i].test)).to.deep.equal(invalidInput[i].answer)
      }
    })
    it('expect to just convert & correct wrong array/values', () => {
      let invalidInput = [
        {test: 'bc', answer: [new Digit(0x3F), new Digit(0x3F), ]},
        {test: '2a44', answer: [new Digit(0x5B), new Digit(0x3F), new Digit(0x66), new Digit(0x66)]},
        {test: '', answer: []}
      ]
      for (let i = 0; i < invalidInput.length; i++) {
        expect(tools.convert(invalidInput[i].test)).to.deep.equal(invalidInput[i].answer)
      }
    })
  })
})
