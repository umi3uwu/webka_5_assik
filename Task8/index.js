function splitSent(){
    const paragraph = document.querySelector("#text");

    const newText = paragraph.innerText.replace(/([.?!])\s+/g, "$1<br>");

    paragraph.innerHTML = newText;

}