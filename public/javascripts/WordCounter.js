'use strict';

/* takes in a string and performs all actions on
  that string */
function WordCounter(str) {
  this.countMap = {};
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
