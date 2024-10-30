function changeSigns(){
    const paragraph = document.querySelector("#text");

    const changedText = paragraph.innerText.replace(/\?/g, "*").replace(/!/g, "@");

    paragraph.innerText = changedText;
}