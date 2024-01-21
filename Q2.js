const ages=[19,22,19,24,20,25,26,24,25,24]
console.log(ages.sort())  // sorting
let min = ages.reduce((acc, cur) => Math.min(acc, cur)); // returns the minimum element of ages
let max = ages.reduce((acc, cur) => Math.max(acc, cur)); // returns the maximum element of ages
console.log("The minimum age is",min);
console.log("The maximum is",max);
function medianAge(ages) {
  let length = ages.length;
  if (length % 2 == 1) {
    return ages[length / 2];
  } else {
    return (ages[length / 2 - 1] + ages[length / 2]) / 2;
  }
}
console.log("The median age is",medianAge(ages));   // returns the median age of the ages
function averageAge(ages) {
  let sum = ages.reduce((acc, cur) => acc + cur); // add up all the elements
  return sum / ages.length; // divide by the number of elements
}
console.log("The average age is",averageAge(ages))  // returns the average age os the ages
function rangeAge(ages){
    return max-min
}
console.log("The range of the ages is",rangeAge(ages))  // returns the range of the ages
function compareDiff(min, max, average) {
  let maxDiff = Math.abs(max - average);
  let minDiff = Math.abs(min - average);
  return [maxDiff, minDiff];
}
console.log(compareDiff(19, 26, 22.8));