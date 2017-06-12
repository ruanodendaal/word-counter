'use strict';

describe('BookProcessor', function() {
  var wordCounter;
  var str;
  var bookProcessor;

  beforeEach(function() {
    str = "They, they he he he clothes Clothes and fires #and mother goose goose!";
    wordCounter = new WordCounter(str);
    bookProcessor = new BookProcessor(wordCounter);
  });

  it('initializes with a wordCounter object', function() {
    expect(bookProcessor.wordProcessor).toEqual(wordCounter);
  });

  describe('#runProcessing', function() {
    it('should return countMap with number of occurances and whether it was prime or not', function() {
      expect(bookProcessor.runProcessing()).toEqual(wordCounter.countMap);
    });
  });
});
