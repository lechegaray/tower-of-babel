var arg1 = process.argv[2];
var arg2 = process.argv[3];

import Main from './Math';
console.log(Main.PI);
console.log(Main.sqrt(+arg1));
console.log(Main.square(+arg2));