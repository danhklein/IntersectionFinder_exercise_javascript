var expect = chai.expect;
// var should = chai.should();

// sample!
describe('Numbers that intersect', function() {
  it('Array should equal 1, 7', function() {
    expect(intersectFinder([1, 2, 7], [1, 4, 7])).to.deep.equal([1, 7]);
  });
});

describe('Numbers that intersect', function() {
  it('Array should equal 5, 8', function() {
    expect(intersectFinder([ 2, 5, 8], [1, 5, 4, 8, 7])).to.deep.equal([5, 8]);
  });
});
