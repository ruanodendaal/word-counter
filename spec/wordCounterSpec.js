'use strict';

describe('WordCounter', function() {
  var wordCounter;

  beforeEach(function() {
    wordCounter = new WordCounter();
  })

  it('initializes with an empty countMap hash', function() {
    expect(wordCounter.countMap).toEqual({});
  });

});
