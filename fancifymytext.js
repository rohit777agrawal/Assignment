// alert("Hello, world!");

// Event handler function for the "Bigger" button
function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
  }
  
  // Event handler function for radio buttons
  function applyStyles() {
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");
  
    if (fancyRadio.checked) {
      // FancyShmancy styles
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      // BoringBetty styles
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black";
      textArea.style.textDecoration = "none";
    }
  }
  
  // Event handler function for the "Moo" button
    function makeMoo() {
        var textArea = document.getElementById("textInput");
        var textValue = textArea.value;
    
        // Uppercase the text
        textValue = textValue.toUpperCase();
    
        // Add a suffix of "-Moo" to the last word of each sentence
        var sentences = textValue.split(".");
        for (var i = 0; i < sentences.length - 1; i++) {
        var words = sentences[i].trim().split(" ");
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
        }
    
        // Join the sentences back together and update the textarea value
        textArea.value = sentences.join(".\n");
    }
  
  