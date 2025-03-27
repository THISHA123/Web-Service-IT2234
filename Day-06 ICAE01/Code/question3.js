//Maximum number by rearranging digits

function getMaxNumber(num) {
    return parseInt(num.toString().split('').sort((a, b) => b - a).join(''), 10);
}


console.log("Input number = 215");
console.log("Max =", getMaxNumber(215)); 
console.log("\nInput number = 1093");
console.log("Max =", getMaxNumber(1093)); 