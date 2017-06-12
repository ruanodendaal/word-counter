'use strict';

function WordCounter(str) {
  this.countMap = {};
  this.wordList = [];
  this._str = str;
}

// remove unwanted characters including uppercase letters
WordCounter.prototype.removeUnwantedChars = function() {
  this._str = this._str.replace(/[\W_]+/gi, ' ').trim().toLowerCase();
  return this._str;
}

// iterate through and count each word
WordCounter.prototype.wordFreq = function() {
  var words = this._str.split(/\s/);
  var countMap = {};
  words.forEach(function(w) {
    if (!countMap[w]) {
      countMap[w] = 0;
    }
    countMap[w] ++;
  });

  return countMap;
};
