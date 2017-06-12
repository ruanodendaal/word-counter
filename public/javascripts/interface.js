$(document).ready(function() {
  var fileText;

  $('#load-btn').click(function(){
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      fileText = this.result;
      processText(fileText)
      document.getElementById('fileDisplayArea').innerText = this.result;
    });
    reader.readAsText(document.querySelector('input').files[0]);
  });

  function processText(fileText) {
    var wordCounter = new WordCounter(fileText);
    var bookProcessor = new BookProcessor(wordCounter);

  }
});
