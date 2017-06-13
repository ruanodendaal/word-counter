'use strict';

describe('FileProcessor', function() {
  var fileProcessor;
  var str;

  beforeEach(function() {
    str = " They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper! ";
    fileProcessor = new FileProcessor(str);
  })

  describe('initializes with a file', function() {
    it('saves it', function() {
      expect(fileProcessor.file).toEqual(file);
    });
  })
});


//   
