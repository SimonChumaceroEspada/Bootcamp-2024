function removeDuplicates(array) {
    // Create an object to keep track of the frequency of each item
    let frequency = {};

    // Loop through the array to count the frequency of each item
    for (let item of array) {
        if (frequency[item]) {
            frequency[item]++;
        } else {
            frequency[item] = 1;
        }
    }

    // Filter the array to keep only the items that appear once
    let result = array.filter(item => frequency[item] === 1);

    return result;
}

let array = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd'];


console.log(removeDuplicates(array)); 
