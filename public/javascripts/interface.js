document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('load-btn').addEventListener('click', function() {
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      processText(this.result)
    });

    var fileText = document.querySelector('input').files[0]
    reader.readAsText(fileText);
  });


  // document.getElementById('run-btn').addEventListener('click', function() {
  //   var filePath = "./railway-children.txt"
  //   const fs = require('fs');
  //   var fileContents = fs.readFileSync(filePath);
  //   processText(fileContents);
  // });


  function processText(fileText) {
    var wordCounter = new WordCounter(fileText);
    var bookProcessor = new BookProcessor(wordCounter);
    bookProcessor.runProcessing();

    document.getElementById('wordsList').innerHTML = bookProcessor.formatOutput();
  }
});
