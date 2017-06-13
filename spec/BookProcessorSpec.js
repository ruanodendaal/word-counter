'use strict';

describe('BookProcessor', function() {
  var str;
  var bookProcessor;

  beforeEach(function() {
    str = "They, they he he he clothes #Clothes and!!";
    bookProcessor = new BookProcessor(str);
  });

  describe('Process complete text', function() {
    it('return countMap with number of occurances and whether it was prime or not', function() {
      var computedObj = { they: [ 2, true ], he: [ 3, true ], clothes: [ 2, true ], and: [ 1, false ] }
      expect(bookProcessor.runProcessing()).toEqual(computedObj);
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
