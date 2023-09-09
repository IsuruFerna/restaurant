function sum(a, b) {
   return a + b;
}

function sum(b, c) {
   return b - c;
}

const num = sum(5, 2);
console.log(num);
console.log("this is sum");

const str = "hello world!";

const newStr = str[0].toUpperCase + str.substring(1);
console.log(newStr);
