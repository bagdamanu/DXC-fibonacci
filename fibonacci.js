const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the series size:  ", function (size) {
    var i;
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    console.log(fib[0]);
    console.log(fib[1]);
    for (i = 2; i <= size-1; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        console.log(fib[i]);
    }
    rl.close();
});

rl.on("close", function () {
    console.log("\nEXITING!!");
    process.exit(0);
});