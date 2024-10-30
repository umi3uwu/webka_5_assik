function countWords(){
    const paragraph = document.querySelector("#text");

    const words = paragraph.innerText.split(" ");

    const numOfWords = words.length;

    alert(`Number of words: ${numOfWords}`)
}