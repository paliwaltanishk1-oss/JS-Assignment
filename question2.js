let N = parseInt(prompt("Enter N:"));
let seed = parseInt(prompt("Enter seed:"));
let current = N;

for (let i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = Math.floor(current / 2) + seed;
    } else {
        current = (current * 3) - seed; 
    }
}

let isThreeDigit = current >= 100 && current <= 999;
let strResult = current.toString();

let middleDigit = parseInt(strResult[1]);

if (isThreeDigit && middleDigit === seed) {
    alert("YES, " + current);
} else {
    alert("NO");
}