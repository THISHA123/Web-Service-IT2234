//Array Initialization

let numarray=[1,4,2,3]

console.log(numarray)

console.log("---------------")
//Iterating Using a for Loop

for(let i=0; i<numarray.length;i++){
	console.log(numarray[i])
}

console.log("---------")
// Iterating Using forEach Method

numarray.forEach((n) => {
console.log(n)
//n ->int element in the array 
//no need to define contition



/*
The for loop requires explicit conditions and indexing (i).
forEach simplifies iteration by automatically accessing each element.
*/

})