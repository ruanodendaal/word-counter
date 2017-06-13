'use strict';

/* takes in a string and performs all actions on
  that string */
function WordCounter(str) {
  this.countMap = {};
  this.str = str;
}

// remove unwanted characters including uppercase letters
WordCounter.prototype.removeUnwantedChars = function() {
  this.removePunctuation();
  this.removeExtraSpaces();
  this.ignoreCaps();
};

WordCounter.prototype.removePunctuation = function() {
  this.str = this.str.replace(/[\W_]+/g, ' ');
};

WordCounter.prototype.removeExtraSpaces = function() {
  this.str = this.str.trim();
};

WordCounter.prototype.ignoreCaps = function() {
  this.str = this.str.toLowerCase()
};

// iterate through and count each word
WordCounter.prototype.wordFreq = function() {
  var words = this.str.split(/\s/);
  var countMap = {};
  words.forEach(function(w) {
    if (!countMap[w]) {
      countMap[w] = 0;
    }
    countMap[w] ++;
  });
  this.countMap = countMap;
};

WordCounter.prototype.isPrimeNumber = function(number) {
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
WordCounter.prototype.mapPrimeNumbers = function() {
  for (var key in this.countMap) {
    if (this.countMap.hasOwnProperty(key)) {
      this.countMap[key] = [ this.countMap[key], this.isPrimeNumber(this.countMap[key]) ]
    }
  }
};
