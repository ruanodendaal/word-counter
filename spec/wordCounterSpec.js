'use strict';

describe('WordCounter', function() {
  var wordCounter;
  var str;

  beforeEach(function() {
    var str = "They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper!";
    wordCounter = new WordCounter(str);
  })

  it('initializes with an empty countMap hash', function() {
    expect(wordCounter.countMap).toEqual({});
  });

  it('initializes with an empty wordList array', function() {
    expect(wordCounter.wordList).toEqual([]);
  });

  describe('Formatting text', function() {

    it('should remove unwanted punctuation', function() {
      var convertedStr = "they needed pretty clothes good fires and a mother goose wall paper";
      expect(wordCounter.removeUnwantedChars()).toEqual(convertedStr);
    });
  });

  describe('WordCounter', function() {
    it('counts how many times each word appears', function() {
      var testStr = "They, they he clothes and fires and mother goose goose";
      wordCounter = new WordCounter(testStr);
      wordCounter.removeUnwantedChars();
      expect(wordCounter.wordFreq()).toEqual({ they: 2, and: 2,
                                               he: 1, clothes: 1,
                                               fires: 1, mother: 1,
                                               goose: 2});
    });
  });
});
