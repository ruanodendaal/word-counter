'use strict';

function FileProcessor(file) {
    this.file = file;
}

FileProcessor.prototype.loadFile = function () {
  var reader = new FileReader();
  reader.onload = function(event) {
    // The file's text will be printed here
    console.log(event.target.result)
    return this.fileText = event.target.result;
  };

  reader.readAsText(this.file);
}
