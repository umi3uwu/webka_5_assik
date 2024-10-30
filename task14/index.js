function calculateVol(){
    const a = parseFloat(document.getElementById("inpA").value);
    const b = parseFloat(document.getElementById("inpB").value);
    const height = parseFloat(document.getElementById("inpHeight").value);
    if (a > 0 && b > 0 && height > 0){
        const vol = a * b * height;
        document.getElementById('res').innerText = `${vol.toFixed(2)}`
    } else{
        document.getElementById('res').innerText = "Invalid a or b or height."
    }
}