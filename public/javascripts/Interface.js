document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('load-btn').addEventListener('click', function() {
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      processFile(reader.result)
    });

    var fileText = document.querySelector('input').files[0]
    reader.readAsText(fileText);
  });

  function processFile(fileText) {
    var bookProcessor = new BookProcessor(fileText);
    bookProcessor.runProcessing();

    document.getElementById('wordsList').innerHTML = bookProcessor.formatOutput();
  }
});
