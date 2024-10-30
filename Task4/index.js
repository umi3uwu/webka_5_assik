function moveChar(){
    const inpStr = document.getElementById('inpStr').value;

    const changedStr = inpStr.split('').map(char => {
        if(/[a-zA-Z]/.test(char)){
            if(char === 'z') return 'a';
            if(char === 'Z') return 'A';
            return String.fromCharCode(char.charCodeAt(0)+1);
        }
        return char;
    }).join('');

    alert(`${changedStr}`);
    }