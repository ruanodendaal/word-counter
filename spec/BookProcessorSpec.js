'use strict';

describe('BookProcessor', function() {
  var wordProcessor;
  var str;
  var bookProcessor;

  beforeEach(function() {
    str = "They, they he he he clothes #Clothes and!!";
    wordProcessor = new WordProcessor(str);
    bookProcessor = new BookProcessor(wordProcessor);
  });

  it('initializes with a wordProcessor object', function() {
    expect(bookProcessor.wordProcessor).toEqual(wordProcessor);
  });

  describe('Process complete text', function() {
    it('return countMap with number of occurances and whether it was prime or not', function() {
      expect(bookProcessor.runProcessing()).toEqual(wordProcessor.countMap);
    });
  });

  describe('Create a output ready to be injected', function() {
    it('format the output nicely', function() {
      bookProcessor.dataObj = {
                                they: [ 2, true ], and: [ 1, false ]
                              };

      var formattedOutput = "<h2>Results:</h2><ul><li><div>'they'&nbsp; frequency: 2&nbsp; | &nbsp; Prime number? &nbsp; true</div></li><li><div>'and'&nbsp; frequency: 1&nbsp; | &nbsp; Prime number? &nbsp; false</div></li></ul>";
      expect(bookProcessor.formatOutput()).toEqual(formattedOutput)
    })
  });
});
