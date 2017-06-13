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
                                they: [ 2, true ], and: [ 1, false ]
                              };

      var formattedOutput = "<h2>Results:</h2><ul><li><div>'they'&nbsp; frequency: 2&nbsp; | &nbsp; Prime number? &nbsp; true</div></li><li><div>'and'&nbsp; frequency: 1&nbsp; | &nbsp; Prime number? &nbsp; false</div></li></ul>";
      expect(bookProcessor.formatOutput()).toEqual(formattedOutput)
    })
  });
});
