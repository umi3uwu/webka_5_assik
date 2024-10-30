const sentence = prompt("Enter a sentence:")

const sortedWords = sentence.split(" ").map(word => word.split("").sort().join("")).join(" ");

document.getElementById("sortedSentence").innerHTML = `<p>${sortedWords}</p>`;