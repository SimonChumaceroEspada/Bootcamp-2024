function findLeastFrequent(array) {
    // Create an object to store the frequency of each item
    let frequency = {};

    // Loop through the array to count the frequency of each item
    for (let item of array) {
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
    }

    // Find the item with the least frequency
    let leastFrequentItem = array[0];
    let leastFrequency = frequency[leastFrequentItem];

    for (let item in frequency) {
        if (frequency[item] < leastFrequency) {
            leastFrequentItem = item;
            leastFrequency = frequency[item];
        }
    }

    return leastFrequentItem;
}

// Sample array
let array = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];

console.log(findLeastFrequent(array));