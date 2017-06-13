'use strict';

describe('WordProcessor', function() {
  var wordProcessor;

  beforeEach(function() {
    wordProcessor = new WordProcessor();
  })

  it('initializes with an empty countMap hash', function() {
    expect(wordProcessor.countMap).toEqual({});
  });

  describe('Removing unwanted characters', function() {
    beforeEach(function() {
      wordProcessor.str = " They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper! ";
    });

    it('remove extra spaces', function() {
      var convertedStr = "They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper!";
      wordProcessor.removeExtraSpaces();
      expect(wordProcessor.str).toEqual(convertedStr);
    });

    it('remove unwanted punctuation', function() {
      var convertedStr = " They needed pretty Clothes good fires and a Mother Goose wall paper ";
      wordProcessor.removePunctuation();
      expect(wordProcessor.str).toEqual(convertedStr);
    });

    it('change text capitalisation', function() {
      var convertedStr = " they needed: pretty# clothes, good fires, and_a_mother goose wall-paper! ";
      wordProcessor.ignoreCaps();
      expect(wordProcessor.str).toEqual(convertedStr);
    });

    it('remove all unwated characters using all', function() {
      var str = " They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper! ";
      var cleanStr = "they needed pretty clothes good fires and a mother goose wall paper";
      wordProcessor.removeUnwantedChars(str);
      expect(wordProcessor.str).toEqual(cleanStr);
    });
  });

  describe('Word counts', function() {
    it('counts how many times each word appears', function() {
      var testStr = "They, they he clothes# and fires and mother goose goose";
      wordProcessor = new WordProcessor();
      wordProcessor.removeUnwantedChars(testStr);
      wordProcessor.wordFreq()
      expect(wordProcessor.countMap).toEqual({ they: 2, and: 2,
                                      he: 1, clothes: 1,
                                      fires: 1, mother: 1,
                                      goose: 2});
    });

    it('ignores numbers', function() {
      var testStr = "7 They, they and 2";
      wordProcessor = new WordProcessor();
      wordProcessor.removeUnwantedChars(testStr);
      wordProcessor.wordFreq();
      expect(wordProcessor.countMap).toEqual({they: 2, and: 1});
    });
  });

  describe('Prime number calculation', function() {
    it('return false for 1 as a prime number', function() {
      expect(wordProcessor.isPrimeNumber(1)).toEqual(false);
    });

    it('return true for 41 as a prime number', function() {
      expect(wordProcessor.isPrimeNumber(4)).toEqual(false);
    });

    it('return true for 41 as a prime number', function() {
      expect(wordProcessor.isPrimeNumber(41)).toEqual(true);
    });
  });

  describe('Adding Prime details to countMap', function() {
    it('include whether or not a word frequency is a prime number', function() {
      wordProcessor.countMap = {they: 3, and: 11,
                              he: 4, clothes: 3,
                              fires: 5, mother: 1,
                              goose: 2};
      wordProcessor.mapPrimeNumbers()
      expect(wordProcessor.countMap).toEqual({
                                            they: [ 3, true ], and: [ 11, true ],
                                            he: [ 4, false ], clothes: [ 3, true ],
                                            fires: [ 5, true ], mother: [ 1, false ],
                                            goose: [ 2, true ]
                                          });

    })
  })
});
