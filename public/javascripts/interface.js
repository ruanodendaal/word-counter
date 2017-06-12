$(document).ready(function() {
  var fileText;

  $('#load-btn').click(function(){
    var reader = new FileReader();
    reader.addEventListener('load', function() {
      fileText = this.result;
      textProcessor(fileText)
      document.getElementById('fileDisplayArea').innerText = this.result;
    });
    reader.readAsText(document.querySelector('input').files[0]);
  });


});
