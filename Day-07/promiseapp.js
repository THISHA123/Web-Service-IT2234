/*
Promise

object from a operation 

mention the status of the operation

promise as a 3 states:
1.pending / waiting (for input somethoing)
2.full filed / resolved-done (operation will done)
3.Rejected / error 

mostly use for error handling 
*/

const fs = require('fs').promises;

const readFile = (filepath) => {
    return fs.readFile('file.txt','utf8') // return a promise
}

readFile('file.txt').then((data) => {
    console.log(data)
})
.catch((err) =>{
    console.error(err);
})