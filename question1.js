let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));
let count = 0;


function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

for (let x = L; x < R; x++) {
    if (x % K === 0) {
        let strX = x.toString();
        if (!strX.includes('0')) {
            let sum = 0;
            for (let char of strX) {
                sum += parseInt(char);
            }
            if (isPrime(sum)) {
                count++;
            }
        }
    }
}
alert(count);