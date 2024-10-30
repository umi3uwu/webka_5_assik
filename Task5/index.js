function findShAndLg(){
    const str1 = prompt("The first string: ")
    const str2 = prompt("The seconds string: ")
    const str3 = prompt("The third string: ")

    const str = [str1, str2, str3];

    let longestStr = str.reduce((longest, cur) => cur.length > longest.length ? cur : longest, str[0]);
    let shortestStr = str.reduce((shortest, cur) => cur.length < shortest.length ? cur : shortest, str[0]);
    
    alert(`Longest: ${longestStr} Shortest: ${shortestStr}`)
}


