/*
a = [4,5,6,3,7]
b = [8,3,2,1,5]
find the common elemens between a and b
*/

console.log("--  common elemens between a and b  --")

let a = [4,5,6,3,7]
let b = [8,3,2,1,5]
a.forEach((n)=>{
	b.forEach((i) =>{
		if(n==i){
		console.log(n)}
	})
})
