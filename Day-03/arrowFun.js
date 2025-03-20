//arrow function
console.log("arrow function")
const msg=()=>{console.log("Hello JS")}
console.log(msg)
msg()



//Write an arrow function to sum 2 numbers 
const add=(a,b)=>{return a+b}
console.log(add(4,5))

//Default parameter
const mult=(a,b=2)=>{return a*b}
console.log(mult(4,5))
console.log(mult(4))

//Rest parameter
const mySum=(...n)=>{
	let t=0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mySum(4,5,6,8,2)


const mysum=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,8,2))


//callback function
const greet=(msg,fun)=>{
	console.log("Hi.." + msg)
	fun
}
const myName=(name)=>{
	console.log("My name is " + name)
}
greet("Good morning",myName("David"))

//A function passed as an aregument

const greet2=(msg,fun)=>{
	console.log("Hi.." + msg)
	fun()
}
greet2("Good morning",()=>{console.log("My name is David")})


const multtwo = (n) => n * 2;
const myarr = (...n) => {
    n.forEach((i) => console.log(multtwo(i)))
}
myarr(4, 5, 6, 8, 2) // Corrected by removing function reference issue


console.log("pass multtwo as a function")

const myarr2 = (fun, ...n) => {
    n.forEach((i) => console.log(fun(i)))
}
myarr2(multtwo, 4, 5, 6, 8, 2)
