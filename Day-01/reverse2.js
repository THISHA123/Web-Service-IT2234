// 4321-5-9876

let r = 15;
let i;
let m = parseInt((r / 2) + 1);

if (r % 2 == 1) {
    
    for (i = m - 1; i > 0; i--) {
        console.log(i);
    }

    
    console.log("-" + m + "-");

    
    for (i = r; i >= m + 1; i--) {
        console.log(i);
    }
}