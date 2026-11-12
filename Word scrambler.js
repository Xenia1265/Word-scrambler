let word = "merryGoRound";
function scramble (string) {
    let temp = "";
    let max = string.length;
    for (x=0; x < max; x++) {
        let randomLetter = Math.floor(Math.random()*string.length);
        temp += string[randomLetter];
        string = string.slice(0, randomLetter).concat(string.slice(randomLetter+1));
        console.log (string, temp);
    }
    return temp;    
}
console.log (scramble(word));