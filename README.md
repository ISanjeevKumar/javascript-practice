## Javascript Prep 

### reduce
 * reduce() is a higher-order array method in JavaScript that applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

 * Parameters:
- callback: A function that is executed on each element of the array
- taking four arguments: accumulator, currentValue, currentIndex, and array.
- initialValue (optional): An initial value for the accumulator. If not provided, the first element in the array is used as the initial accumulator value.

* Purpose: reduce() is used to transform an array into a single value, such as a number, string, or object, by applying a function that accumulates the results of iterating through the array.

* Use Cases:
- Calculating a single value from an array of numbers, such as sum, product, or average.
- Flattening nested arrays into a single level array.
- Grouping elements of an array based on a criterion.
- Building objects or maps from arrays.
- Performing complex data transformations on arrays.