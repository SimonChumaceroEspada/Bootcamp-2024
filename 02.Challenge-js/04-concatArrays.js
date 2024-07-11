const concatArrays = (arrays) => {
    return arrays.map(arr => arr.join(" "));
};

let data = [
  ["The", "little", "horse"],
  ["Plane", "over", "the", "ocean"],
  ["Chocolate", "ice", "cream", "is", "awesome"],
  ["this", "is", "a", "long", "sentence"]
];

console.log(concatArrays(data));