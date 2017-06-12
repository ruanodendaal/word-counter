'use strict';

/* takes in a wordCounter object and prepares the text ready
  to output on the frontend */
function BookProcessor(wordCounter) {
  this.wordProcessor = wordCounter;
}
// process all steps for a given file
BookProcessor.prototype.runProcessing = function() {
  this.wordProcessor.removeUnwantedChars();
  this.wordProcessor.wordFreq();
  this.wordProcessor.mapPrimeNumbers()

  return this.dataObj = this.wordProcessor.countMap
}
