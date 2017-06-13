'use strict';

function FileProcessor(file) {
  this.file = file;
}

FileProcessor.prototype.loadFile = function () {
  var reader = new FileReader();
  var processor = this;
  reader.onload = function(event) {
    console.log(event.target.result)
    // return this.fileText = event.target.result;
    processor.storeText(event.target.result)
  };

  reader.readAsText(this.file);
}

FileProcessor.prototype.storeText = function(text) {
  this.fileText = text;
};
