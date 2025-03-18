//array operation
//push and pop
arr5 = ['a','b','d']
console.log(arr5)
arr5.push('e')
console.log(arr5)
arr5.pop()
console.log(arr5)

//reverse the aaray using push and pop
//a b cd -> d c b a

let arr6 = ['a', 'b', 'c', 'd'];
let reversed = [];

while (arr6.length > 0) {
    reversed.push(arr6.pop());
}
console.log(reversed);

