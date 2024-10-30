function highlight(){
    const paragraph = document.querySelector("#text");

    const words = paragraph.innerText.split(" ");

    const newWords = words.map(word => {
        if (word.toLowerCase().startsWith("a")){
            return `<span style = "font-style:italic">${word}</span>`;
        }
        if (word.toLowerCase().endsWith("y")){
            return `<span style = "text-decoration:underline">${word}</span>`;
        }
        return word;
    }).join(" ");

    paragraph.innerHTML = newWords;
}