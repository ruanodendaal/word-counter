'use strict';

describe('WordCounter', function() {
  var wordCounter;
  var str;

  beforeEach(function() {
    str = " They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper! ";
    wordCounter = new WordCounter(str);
  })

  it('initializes with an empty countMap hash', function() {
    expect(wordCounter.countMap).toEqual({});
  });

  describe('Removing unwanted characters', function() {
    it('should remove extra spaces', function() {
      var convertedStr = "They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper!";
      wordCounter.removeExtraSpaces();
      expect(wordCounter.str).toEqual(convertedStr);
    });

    it('should remove unwanted punctuation', function() {
      var convertedStr = " They needed pretty Clothes good fires and a Mother Goose wall paper ";
      wordCounter.removeUnwantedChars();
      expect(wordCounter.str).toEqual(convertedStr);
    });

    it('should change text capitalisation', function() {
      var convertedStr = " they needed pretty clothes good fires and a mother goose wall paper ";
      wordCounter.ignoreCaps();
      expect(wordCounter.str).toEqual(convertedStr);
    });
  });

  describe('Word counts', function() {
    it('counts how many times each word appears', function() {
      var testStr = "They, they he clothes and fires and mother goose goose";
      wordCounter = new WordCounter(testStr);
      wordCounter.removeUnwantedChars();
      wordCounter.wordFreq()
      expect(wordCounter.countMap).toEqual({ they: 2, and: 2,
                                      he: 1, clothes: 1,
                                      fires: 1, mother: 1,
                                      goose: 2});
    });
  });

  describe('Prime number calculation', function() {
    it('should return false for 1 as a prime number', function() {
      expect(wordCounter.isPrimeNumber(1)).toEqual(false);
    });

    it('should return true for 41 as a prime number', function() {
      expect(wordCounter.isPrimeNumber(4)).toEqual(false);
    });

    it('should return true for 41 as a prime number', function() {
      expect(wordCounter.isPrimeNumber(41)).toEqual(true);
    });
  });

  describe('Adding Prime details to countMap', function() {
    it('should include whether or not a word frequency is a prime number', function() {
      wordCounter.countMap = {they: 3, and: 11,
                              he: 4, clothes: 3,
                              fires: 5, mother: 1,
                              goose: 2};
      wordCounter.mapPrimeNumbers()
      expect(wordCounter.countMap).toEqual({
                                            they: [ 3, true ], and: [ 11, true ],
                                            he: [ 4, false ], clothes: [ 3, true ],
                                            fires: [ 5, true ], mother: [ 1, false ],
                                            goose: [ 2, true ]
                                          });

    })
  })
});
