function findFirstNonRepeatedCharacter(){
    const inpStr = document.getElementById('inputString').value;

    const nonRepeatedChar= inpStr.split("").filter((char,index,array) => array.indexOf(char) === array.lastIndexOf(char));

    const firstNonRepeatedChar = nonRepeatedChar.length > 0 ? nonRepeatedChar[0] : null;

    document.getElementById('result').innerHTML = firstNonRepeatedChar ? `<p>${firstNonRepeatedChar}</p>` : `<p>Not found</p>`
}