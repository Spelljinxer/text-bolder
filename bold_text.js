function boldText(event) {
  event.preventDefault(); 

  let inputText = document.getElementById("text-input").value;
  let words = inputText.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 2) {
      let numToBold = Math.floor(Math.random() * (words[i].length - 1)) + 1;
      words[i] = "<span class='bold'>" + words[i].substring(0, numToBold) + "</span>" + words[i].substring(numToBold);
    }
  }

  let boldText = words.join(" ");

  document.getElementById("output").innerHTML = boldText;
}