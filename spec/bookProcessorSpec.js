'use strict';

describe('BookProcessor', function() {
  var wordCounter;
  var str;
  var bookProcessor;

  beforeEach(function() {
    str = "They needed: pretty# Clothes, good fires, and_a_Mother Goose wall-paper!";
    wordCounter = new WordCounter(str);
    bookProcessor = new BookProcessor(wordCounter);
  });

  it('initializes with a wordCounter object', function() {
    expect(bookProcessor.wordProcessor).toEqual(wordCounter);
  });
});
