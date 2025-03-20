//Functions 
function PrintMsg(){
	console.log("Hello JS")
}
PrintMsg()


function sum(){
	return 5+6
}
console.log(sum())


function sub(a,b){
	return a-b
}
console.log(sub(5,3)) // parse the parameter

//Write a boolean function to find a given Number is prime

console.log("Boolean Function to Check if a Number is Prime")

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true;
}
console.log(isPrime(9)) // true
console.log(isPrime(5)) // false


//Write recursive function to print numbers from 1 to n

console.log("Recursive Function to Print Numbers from 1 to n")

const printNumbers = (n, current = 1) => {
    if (current > n) return;
    console.log(current);
    printNumbers(n, current + 1)
}
printNumbers(7)




