// 7654321-5-15 14 13 12 11 10 9876

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
