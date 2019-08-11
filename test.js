
require('chai').should();

const findIndex = require('./index.js');

mocks = [
  [1,2,3,4,3,2,1],
  [1,100,50,-51,1,1],
  [1,2,3,4,5,6],
  [20,10,30,10,10,15,35],
  [1,0],
  [0,25]
]

describe('Equal sides', function () {

  it('Should return the index of the position where the left side and right side are equal', function () {
    findIndex(mocks[0]).should.equal(3)
    findIndex(mocks[1]).should.equal(1)
    findIndex(mocks[3]).should.equal(3)
    findIndex(mocks[4]).should.equal(0)
    findIndex(mocks[5]).should.equal(1)
  });

  it('Should return -1 if no equality is found', function () {
    findIndex(mocks[2]).should.equal(-1)
  });
})