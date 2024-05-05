const arr = [2, 4, 3, 24, 45, 67, 5, 6]

// sum of elements in array
const sum = arr.reduce((result, ele) => {
    return result + ele;
}, 0)

console.log(sum)

// reverse the string  
let name = 'hello World!!'
const arr2 = name.split('')

const reverse = arr2.reduce((result, ele) => {
    return ele + result
}, "")

console.log(reverse)

// max value in array
const maxVal = arr.reduce((max, current) => {
    if (max < current) {
        max = current;
    }
    return max;
}, 0)

console.log("max value", maxVal)

// Write a function that flattens a nested array into a single level array.

const nestedArray = [1, [2, [3, 4]], 5, [6]];

function flattenArray(arr) {
    return arr.reduce((ar, currentArr) => {
        return ar.concat(Array.isArray(currentArr) ? flattenArray(currentArr) : currentArr)
    }, [])
}
const flatten = flattenArray(nestedArray)
console.log("Flatten", flatten)

//Counting Instances of Values in an Array:
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

console.log(items.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
}, {}))