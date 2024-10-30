function highlight(){
    const paragraph = document.querySelector('#text');

    const words = paragraph.innerText.split(' ');

    const newText = words.map(word => {
        if(word.length > 7){
            return `<span style="background-color:blue">${word}</span>`;
        }
        else if (word.length < 3){
            return `<span style = "font-weight:bold">${word}</span>`;
        }
        return word;
    });

    paragraph.innerHTML = newText.join(" ");
}