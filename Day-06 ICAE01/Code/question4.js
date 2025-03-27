// Decimal to Hexadecimal using recursion and callback

function HexSWC(decimal) {
    switch (decimal) {
        case 0: return '0';
        case 1: return '1';
        case 2: return '2';
        case 3: return '3';
        case 4: return '4';
        case 5: return '5';
        case 6: return '6';
        case 7: return '7';
        case 8: return '8';
        case 9: return '9';
        case 10: return 'A';
        case 11: return 'B';
        case 12: return 'C';
        case 13: return 'D';
        case 14: return 'E';
        case 15: return 'F';
        default: return '';
    }
}

function decimalToHex(decimal, callback) {
    if (decimal === 0) return '';
    return decimalToHex(Math.floor(decimal / 16), callback) + callback(decimal % 16);
}

function convertToHex(decimal) {
    return decimal === 0 ? '0' : decimalToHex(decimal, HexSWC);
}


console.log("Input decimal = 255");
console.log("Hex =", convertToHex(255)); 
console.log("\nInput decimal = 16");
console.log("Hex =", convertToHex(16)); 
console.log("\nInput decimal = 31");
console.log("Hex =", convertToHex(31)); 