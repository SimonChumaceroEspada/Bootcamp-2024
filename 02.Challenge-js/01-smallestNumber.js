let array = [12, 6, 10, 2, 45, 100];

const smallestNumber = array.reduce((a, b) => Math.min(a, b));
console.log(smallestNumber);