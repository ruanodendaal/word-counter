'use strict';

/* takes in a WordProcessor object and prepares the text ready
  to output on the frontend */
function BookProcessor(fileText, wordProcessor = new WordProcessor()) {
  this.wordProcessor = wordProcessor;
  this.fileText = fileText;
}

// process all steps for a given file
BookProcessor.prototype.runProcessing = function() {
  this.wordProcessor.removeUnwantedChars(this.fileText);
  this.wordProcessor.wordFreq();
  this.wordProcessor.mapPrimeNumbers()

  return this.dataObj = this.wordProcessor.countMap;
}

BookProcessor.prototype.formatOutput = function() {
  let wordArray = [];
  for (let key in this.dataObj) {
    var htmlWrapperStart = "<li><div>";
    var htmlWrapperEnd = "</div></li>";
    wordArray.push(htmlWrapperStart + `'${key}'&nbsp; frequency: ${this.dataObj[key][0]}&nbsp; | &nbsp; Prime number? &nbsp; ${this.dataObj[key][1]}` + htmlWrapperEnd)
  }

  var header = "<h2>Results:</h2>"
  return header + "<ul>" + wordArray.join('') + "</ul>";
};
