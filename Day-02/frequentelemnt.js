//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array




let arr5 = [4,8,3,4,3,2,1,8,4];
let frequency = {};
let maxCount = 0;
let mostFrequent = null;

arr5.forEach(n => {
    frequency[n] = (frequency[n] || 0) + 1;
    if (frequency[n] > maxCount) {
        maxCount = frequency[n];
        mostFrequent = n;
    }
});
console.log("Most Frequent: " + mostFrequent);

//Finds the most frequent element in an array.
