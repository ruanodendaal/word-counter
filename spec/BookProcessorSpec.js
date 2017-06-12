'use strict';

describe('BookProcessor', function() {
  var wordCounter;
  var str;
  var bookProcessor;

  beforeEach(function() {
    str = "They, they he he he clothes #Clothes and!!";
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

  describe('#formatOutput', function() {
    it('should format the output nicely', function() {
      bookProcessor.dataObj = {
                                they: [ 2, true ], and: [ 1, false ],
                                he: [ 3, true ], clothes: [ 2, true ]
                              };

      var formattedOutput = "'they' COUNT: 2; Prime number? true\n'and' COUNT: 1; Prime number? false\n'he' COUNT: 3; Prime number? true\n'clothes' COUNT: 2; Prime number? true"
      expect(bookProcessor.formatOutput()).toEqual(formattedOutput)
    })
  });
});
