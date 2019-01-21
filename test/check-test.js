const expect = require('chai').expect
const tools = require('../modules/tools') 

describe('tools', () => {
  describe('.checkInput', () => {
    it('expect to return undefined with correct value', () => {
      let validInput = ['000', '123', '666', '999' ]
      for (let i = 0; i < validInput.length; i++) {
        let data = ['x', 'y', validInput[i]]
        expect(tools.checkInput(data)).to.be.undefined
      }
    })
    it('expect to throw exception when giver wrong value', () => {
      let invalidInput = [undefined, '', '1231', '6666', '9', '56', 'ABS', 'abc', '2a4', '44t' ]
      for (let i = 0; i < invalidInput.length; i++) {
        let data = ['x', 'y', invalidInput[i]]
        let fn = () => {tools.checkInput(data)}
        expect(fn).to.throw()
      }
    })
    it('expect to throw exception when the input is malformed', () => {
      expect(() => { tools.checkInput([]) }).to.throw()
      expect(() => { tools.checkInput(['x']) }).to.throw()
      expect(() => { tools.checkInput(['x', 'y']) }).to.throw()
      expect(() => { tools.checkInput(['x', 'y', '666', 'z']) }).to.throw()
    })
  })
})
