let base = parseFloat(prompt("Enter base fare:"));
let distance = parseFloat(prompt("Enter distance:"));
let minutesLate = parseInt(prompt("Enter minutes late:"));
let seed = parseInt(prompt("Enter seed:"));

let fare = base + (7 * distance);

if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += (0.10 * fare);
}

if (seed % 2 !== 0) { // odd
    fare -= seed;
} else { // even
    fare += seed;
}

// Round up to the nearest multiple of 5
let roundedFare = Math.ceil(fare / 5) * 5;
alert(roundedFare);