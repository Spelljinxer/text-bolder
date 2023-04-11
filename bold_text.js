function boldText(event) {
    event.preventDefault(); 
  
    let inputText = document.getElementById("text-input").value;
    let words = inputText.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      let numToBold = Math.floor(Math.random() * Math.min(words[i].length - 2, 3)) + 1;
      words[i] = "<span class='bold'>" + words[i].substring(0, numToBold) + "</span>" + words[i].substring(numToBold);
    }
  
    let boldText = words.join(" ");
  
    document.getElementById("output").innerHTML = boldText;
  }