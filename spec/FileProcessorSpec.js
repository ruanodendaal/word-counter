'use strict';

describe('FileProcessor', function() {
  var fileProcessor;
  var str;
  var file;

  beforeEach(function() {
    str = " They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper! ";
    file = { name: 'a file' };
    fileProcessor = new FileProcessor(file);
  });

  describe('initializes with a file', function() {
    it('saves it', function() {
      expect(fileProcessor.file).toEqual(file);
    });
  });
});


//   describe('Removing unwanted characters', function() {
//     it('remove extra spaces', function() {
//       var convertedStr = "They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper!";
//       fileProcessor.removeExtraSpaces();
//       expect(fileProcessor.str).toEqual(convertedStr);
//     });
//
//     it('remove unwanted punctuation', function() {
//       var convertedStr = " They needed pretty Clothes good fires and a Mother Goose wall paper ";
//       fileProcessor.removePunctuation();
//       expect(fileProcessor.str).toEqual(convertedStr);
//     });
//
//     it('change text capitalisation', function() {
//       var convertedStr = " they needed: pretty# clothes, good fires, and_a_mother goose wall-paper! ";
//       fileProcessor.ignoreCaps();
//       expect(fileProcessor.str).toEqual(convertedStr);
//     });
//
//     it('remove all unwated characters using all', function() {
//       var cleanStr = "they needed pretty clothes good fires and a mother goose wall paper";
//       fileProcessor.removeUnwantedChars();
//       expect(fileProcessor.str).toEqual(cleanStr);
//     });
//   });
// });
