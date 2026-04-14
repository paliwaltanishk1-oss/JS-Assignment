let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let found = false;

function isPalindrome(num) {
    let str = num.toString();
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

for (let X = 0; X <= 10000; X++) {
    let sum = N + X;
    if (sum % K === 0 && isPalindrome(sum)) {
        alert(X);
        found = true;
        break;
    }
}

if (!found) {
    alert(-1);
}