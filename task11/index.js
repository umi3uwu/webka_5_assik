function calculateVol(){
    const radius = parseFloat(document.getElementById("inpRad").value);

    if (radius > 0){
        const vol = (4/3)*Math.PI * Math.pow(radius, 3);
        document.getElementById('res').innerText = `${vol.toFixed(2)}`
    } else{
        document.getElementById('res').innerText = "Invalid radius."
    }
}