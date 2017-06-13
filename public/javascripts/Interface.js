$(document).ready(function() {

  $('#fileInput').on("change", function() {
    var file = document.getElementById("fileInput").files[0];
    fileProcessor = new FileProcessor(file);
    fileProcessor.loadFile();
  });

  $('#run-btn').click(function() {
    $.when(processFile(fileProcessor.fileText)).then(outputText());
    ;
    // outputText()
    // var output = bookProcessor.formatOutput();
    // console.log(output);
    // document.getElementById('wordsList').innerHTML = output;
  });

  function processFile(file) {
    var bookProcessor = new BookProcessor(file);
    bookProcessor.runProcessing();
    console.log("runProcessing() COMPLETED")
    var output = bookProcessor.formatOutput();
    console.log(output);
    document.getElementById('wordsList').innerHTML = output;
    // $('#wordList').html = output;
  };
});
