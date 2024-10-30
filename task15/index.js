function calculateVol(){
    const b = parseFloat(document.getElementById("inpB").value);
    const height = parseFloat(document.getElementById("inpHeight").value);
    if (b > 0 && height > 0){
        const vol = (1/2) * b * height;
        document.getElementById('res').innerText = `${vol.toFixed(2)}`
    } else{
        document.getElementById('res').innerText = "Invalid a or b or height."
    }
}