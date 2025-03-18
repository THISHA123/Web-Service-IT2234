//find the max number in the array using forEach

console.log("----- Max -----")

let numarray=[1,4,2,3]
let max = 0
numarray.forEach((n) => {
	/* if(n>max){
	max=n} */
	(max < n) && (max = n)
	//// Shorter way of writing if condition
})
console.log("Max : " + max)

//print the nested array
//[ [1,2,30],[5,6],[8,5,3] ]

console.log("----- Nested Array ----")
let arr2 =[ [1,2,30],[5,6],[8,5,3] ]
arr2.forEach((n) => {
	console.log(n)
	
	//Prints each sub-array.
})

console.log("---------------")
let arr3 =[ [1,2,30],[5,6],[8,5,3] ]
arr3.forEach((n) => {
	n.forEach((i) =>{
	console.log(i)
	})
	//Iterates through each nested array and prints every element.
})
