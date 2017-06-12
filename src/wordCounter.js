'use strict';

function WordCounter(str) {
  this.countMap = {};
  this.wordList = [];
  this._str = str;
}

// remove unwanted characters including uppercase letters
WordCounter.prototype.removeUnwantedChars = function() {
  this._str = this._str.replace(/[\W_]+|\s+/gm, ' ').toLowerCase();
  return this._str;
};
