require('chai').should();

const Welcome = require('../app/Welcome');

describe('Welcome', () => {
  describe('is constructed', () => {
    it('with defaults', () => {
      const welcome = new Welcome({ });
      welcome.should.be.instanceof(Welcome);
      welcome.should.haveOwnProperty('name', 'World');
    });
    it('with name="David"', () => {
      const welcome = new Welcome({ name: 'David' });
      welcome.should.be.instanceof(Welcome);
      welcome.should.haveOwnProperty('name', 'David');
    });
  });

  describe('returns correct message', () => {
    it('with defaults', () => {
      const welcome = new Welcome({ });
      welcome.message.should.equal('Hello World');
    });
    it('with name="Steve"', () => {
      const welcome = new Welcome({ name: 'Steve' });
      welcome.message.should.equal('Hello Steve');
    });
  });
});
