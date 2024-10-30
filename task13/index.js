function calculateVol(){
    const radius = parseFloat(document.getElementById("inpRad").value);
    const height = parseFloat(document.getElementById("inpHeight").value);
    if (radius > 0 && height > 0){
        const vol = (1/3) * height * Math.PI * Math.pow(radius, 2);
        document.getElementById('res').innerText = `${vol.toFixed(2)}`
    } else{
        document.getElementById('res').innerText = "Invalid radius or height."
    }
}