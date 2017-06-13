'use strict';

/* takes in a string and performs all actions on
  that string */
function WordProcessor() {
  this.countMap = {};
  this.str;
}

// remove unwanted characters including uppercase letters
WordProcessor.prototype.removeUnwantedChars = function(str) {
  this.str = str;
  this.removePunctuation();
  this.removeExtraSpaces();
  this.ignoreCaps();
};

WordProcessor.prototype.removePunctuation = function() {
  this.str = this.str.replace(/[\W_]+/g, ' ');
};

WordProcessor.prototype.removeExtraSpaces = function() {
  this.str = this.str.trim();
};

WordProcessor.prototype.ignoreCaps = function() {
  this.str = this.str.toLowerCase()
};

// iterate through and count each word
WordProcessor.prototype.wordFreq = function() {
  var words = this.str.split(/\s/);
  var wordMap = {};
  words.forEach(function(w) {
    if (!Number.isNaN(Number(w))) {
        return;
    }
    wordMap[w] = (typeof wordMap[w] === 'undefined' ? 0 : wordMap[w]) + 1;
  });
  this.countMap = wordMap;
};

WordProcessor.prototype.isPrimeNumber = function(number) {
  var sqrtNum = Math.sqrt(number);
    var prime = (number !=1);
    for(var i = 2; i <= sqrtNum; i++) {
      if(number % i == 0) {
        prime = false;
        break;
      }
    }
  return prime;
};

// add true or false to countMap if number is prime
WordProcessor.prototype.mapPrimeNumbers = function() {
  for (var key in this.countMap) {
    if (this.countMap.hasOwnProperty(key)) {
      this.countMap[key] = [ this.countMap[key], this.isPrimeNumber(this.countMap[key]) ]
    }
  }
};
